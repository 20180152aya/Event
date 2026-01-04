function checkDashboardAccess() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.isLoggedIn) {
        window.location.href = 'dashboard.html';
    } else {

        alert("يرجى تسجيل الدخول أولاً للوصول إلى لوحة التحكم");
        window.location.href = 'login.html';
    }
}
const langMenu = document.getElementById('langMenu');
const langBtn = document.getElementById('langBtn');
const langBtnMob = document.getElementById('langBtnMob');

function toggleMenu(e) {
    e.stopPropagation();
    langMenu.classList.toggle('show');
}

if (langBtn) langBtn.addEventListener('click', toggleMenu);
if (langBtnMob) langBtnMob.addEventListener('click', toggleMenu);

document.addEventListener('click', () => {
    langMenu.classList.remove('show');
});

function renderTickets() {
    const container = document.getElementById('tickets-container');
    container.innerHTML = '';

    ticketsData.forEach(ticket => {
        let options = '';
        if (ticket.available > 0) {
            for (let i = 1; i <= ticket.available; i++) {
                options += `<option value="${i}">${i}</option>`;
            }
        } else {
            options = `<option value="0">0</option>`;
        }

        const ticketCard = `
            <div class="ticket-card" id="ticket-${ticket.id}">
                ${ticket.isTrusted ? `<div class="trusted-line"><i class="fa-solid fa-circle-check"></i> بائع موثوق لدى تيك ايفنت</div>` : '<div class="trusted-line" style="visibility:hidden">.</div>'}
                
                <div class="card-top-line">
                    <div class="together-badge">
                        <i class="fa-solid fa-couch"></i>
                        <i class="fa-solid fa-couch"></i>
                        <span>التذاكر بجانب بعض</span>
                    </div>
                    <div class="available-count">متوفر : ${ticket.available}</div>
                </div>

                <div class="card-main-content">
                    <div class="detail-column align-right">
                        <div class="label">نوع التذكرة</div>
                        <div class="value category-text">${ticket.category}</div>
                    </div>

                    <div class="detail-column">
                        <div class="label">اجمالي السعر</div>
                        <div class="value price-text" id="price-${ticket.id}" data-unit-price="${ticket.price}">SAR ${ticket.price}</div>
                    </div>

                    <div class="detail-column">
                        <div class="label">الكمية</div>
                        <div class="qty-wrapper">
                            <select id="qty-select-${ticket.id}" onchange="updateTotalPrice(${ticket.id}, this.value)" ${ticket.available === 0 ? 'disabled' : ''}>
                                ${options}
                            </select>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>

                    <div class="detail-column align-left">
                        <div class="buy-btn-container">
                            <button class="buy-btn ${ticket.available === 0 ? 'sold-out' : ''}" 
                                    onclick="goToBooking(${ticket.id})" 
                                    ${ticket.available === 0 ? 'disabled' : ''}>
                                ${ticket.available === 0 ? 'نفذت الكمية' : 'شراء'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', ticketCard);
    });
}

function updateTotalPrice(ticketId, quantity) {
    const priceElement = document.getElementById(`price-${ticketId}`);
    const unitPrice = parseFloat(priceElement.getAttribute('data-unit-price'));
    const newTotal = (unitPrice * parseInt(quantity)).toFixed(2);
    priceElement.innerText = `SAR ${newTotal}`;
}

renderTickets();


let buyersList = JSON.parse(localStorage.getItem('buyers')) || [];

function goToBooking(ticketId = null) {
    const modal = document.getElementById('bookingModal');
    const categorySelect = document.getElementById('modalCategory');
    const qtyInput = document.getElementById('modalQty');
    const stockHint = document.getElementById('stockHint');

    const categories = [...new Set(ticketsData.map(t => t.category))];
    categorySelect.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');

    if (ticketId) {

        const ticket = ticketsData.find(t => t.id === ticketId);
        const selectedQty = document.getElementById(`qty-select-${ticketId}`).value;
        categorySelect.value = ticket.category;
        qtyInput.value = selectedQty;
        qtyInput.max = ticket.available;
        stockHint.innerText = `المتاح من هذا العرض: ${ticket.available}`;
        document.getElementById('bookingForm').setAttribute('data-target-id', ticketId);
    } else {
        document.getElementById('bookingForm').removeAttribute('data-target-id');
        syncModalPrice();
    }
    modal.style.display = "block";
}

function syncModalPrice() {
    const cat = document.getElementById('modalCategory').value;
    const qtyInput = document.getElementById('modalQty');
    const stockHint = document.getElementById('stockHint');
    const targetId = document.getElementById('bookingForm').getAttribute('data-target-id');

    let availableStock = 0;

    if (targetId) {

        const ticket = ticketsData.find(t => t.id == targetId);
        availableStock = ticket.available;
    } else {
        availableStock = ticketsData
            .filter(t => t.category === cat)
            .reduce((sum, t) => sum + t.available, 0);
    }

    qtyInput.max = availableStock;
    stockHint.innerText = `إجمالي المتاح لهذه الفئة: ${availableStock}`;

    if (parseInt(qtyInput.value) > availableStock) {
        qtyInput.value = availableStock;
    }

    const refTicket = ticketsData.find(t => t.category === cat);
    if (refTicket) {
        document.getElementById('modalTotalPrice').innerText = `SAR ${(refTicket.price * qtyInput.value).toFixed(2)}`;
    }
}

document.getElementById('bookingForm').onsubmit = function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target-id');
    const selectedCategory = document.getElementById('modalCategory').value;
    const requestedQty = parseInt(document.getElementById('modalQty').value);
    const d1 = document.getElementById('data1').value.trim();
    const d2 = document.getElementById('data2').value.trim();

    let ticketToUpdate;

    if (targetId) {
        ticketToUpdate = ticketsData.find(t => t.id == targetId);
    } else {
        ticketToUpdate = ticketsData.find(t => t.category === selectedCategory && t.available >= requestedQty);
    }

    if (!ticketToUpdate || ticketToUpdate.available < requestedQty) {
        alert("الكمية المطلوبة غير متوفرة!");
        return;
    }
    
    ticketToUpdate.available -= requestedQty;
    localStorage.setItem('mainTicketsData', JSON.stringify(ticketsData));
    const newBooking = {
        id: Date.now(),
        name: document.getElementById('buyerName').value,
        phone: document.getElementById('buyerPhone').value,
        data1: d1 ? d1 : "لا يوجد داتا",
        data2: d2 ? d2 : "لا يوجد داتا",
        category: selectedCategory,
        qty: requestedQty,
        totalPrice: document.getElementById('modalTotalPrice').innerText,
        date: new Date().toLocaleString()
    };

    let buyers = JSON.parse(localStorage.getItem('buyers')) || [];
    buyers.push(newBooking);
    localStorage.setItem('buyers', JSON.stringify(buyers));

    renderTickets();

    document.getElementById('formContainer').style.display = "none";
    document.getElementById('successMessage').style.display = "block";
};


function closeModal() {

    document.getElementById('bookingModal').style.display = "none";

    setTimeout(() => {

        document.getElementById('formContainer').style.display = "block";

        document.getElementById('successMessage').style.display = "none";

        document.getElementById('bookingForm').reset();

    }, 400);

}



window.onclick = function (event) {

    const modal = document.getElementById('bookingModal');

    if (event.target == modal) closeModal();

}
const ticketsData = [
    // --- 1. Diamond 1 ---
    { id: 1, category: "Diamond 1", price: "2500", available: 5, isTrusted: true, isTogether: true, soldOut: false },
    { id: 2, category: "Diamond 1", price: "2300", available: 2, isTrusted: false, isTogether: true, soldOut: false },
    { id: 3, category: "Diamond 1", price: "2700", available: 0, isTrusted: true, isTogether: true, soldOut: true },
    { id: 4, category: "Diamond 1", price: "2450", available: 8, isTrusted: false, isTogether: false, soldOut: false },
    { id: 5, category: "Diamond 1", price: "2600", available: 1, isTrusted: true, isTogether: true, soldOut: false },
    { id: 6, category: "Diamond 1", price: "2200", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 7, category: "Diamond 1", price: "2550", available: 3, isTrusted: true, isTogether: false, soldOut: false },
    { id: 8, category: "Diamond 1", price: "2400", available: 4, isTrusted: false, isTogether: true, soldOut: false },

    // --- 2. Diamond 2 ---
    { id: 9, category: "Diamond 2", price: "2200", available: 4, isTrusted: true, isTogether: true, soldOut: false },
    { id: 10, category: "Diamond 2", price: "2100", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 11, category: "Diamond 2", price: "2300", available: 2, isTrusted: true, isTogether: true, soldOut: false },
    { id: 12, category: "Diamond 2", price: "2150", available: 6, isTrusted: false, isTogether: false, soldOut: false },
    { id: 13, category: "Diamond 2", price: "2250", available: 1, isTrusted: true, isTogether: true, soldOut: false },
    { id: 14, category: "Diamond 2", price: "2000", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 15, category: "Diamond 2", price: "2280", available: 3, isTrusted: true, isTogether: false, soldOut: false },
    { id: 16, category: "Diamond 2", price: "2180", available: 5, isTrusted: false, isTogether: true, soldOut: false },

    // --- 3. Diamond 3 ---
    { id: 17, category: "Diamond 3", price: "2100", available: 3, isTrusted: true, isTogether: true, soldOut: false },
    { id: 18, category: "Diamond 3", price: "2000", available: 2, isTrusted: false, isTogether: true, soldOut: false },
    { id: 19, category: "Diamond 3", price: "2200", available: 0, isTrusted: true, isTogether: true, soldOut: true },
    { id: 20, category: "Diamond 3", price: "2050", available: 4, isTrusted: false, isTogether: false, soldOut: false },
    { id: 21, category: "Diamond 3", price: "2150", available: 1, isTrusted: true, isTogether: true, soldOut: false },
    { id: 22, category: "Diamond 3", price: "1950", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 23, category: "Diamond 3", price: "2180", available: 5, isTrusted: true, isTogether: false, soldOut: false },
    { id: 24, category: "Diamond 3", price: "2080", available: 6, isTrusted: false, isTogether: true, soldOut: false },

    // --- 4. Platnum ---
    { id: 25, category: "Platnum", price: "1800", available: 10, isTrusted: true, isTogether: true, soldOut: false },
    { id: 26, category: "Platnum", price: "1750", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 27, category: "Platnum", price: "1900", available: 4, isTrusted: true, isTogether: true, soldOut: false },
    { id: 28, category: "Platnum", price: "1850", available: 6, isTrusted: false, isTogether: false, soldOut: false },
    { id: 29, category: "Platnum", price: "1700", available: 2, isTrusted: true, isTogether: true, soldOut: false },
    { id: 30, category: "Platnum", price: "1950", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 31, category: "Platnum", price: "1820", available: 7, isTrusted: true, isTogether: false, soldOut: false },
    { id: 32, category: "Platnum", price: "1780", available: 3, isTrusted: false, isTogether: true, soldOut: false },

    // --- 5. Gold ---
    { id: 33, category: "Gold", price: "1200", available: 15, isTrusted: true, isTogether: true, soldOut: false },
    { id: 34, category: "Gold", price: "1150", available: 5, isTrusted: false, isTogether: true, soldOut: false },
    { id: 35, category: "Gold", price: "1250", available: 0, isTrusted: true, isTogether: true, soldOut: true },
    { id: 36, category: "Gold", price: "1100", available: 20, isTrusted: false, isTogether: false, soldOut: false },
    { id: 37, category: "Gold", price: "1300", available: 2, isTrusted: true, isTogether: true, soldOut: false },
    { id: 38, category: "Gold", price: "1180", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 39, category: "Gold", price: "1220", available: 8, isTrusted: true, isTogether: false, soldOut: false },
    { id: 40, category: "Gold", price: "1190", available: 10, isTrusted: false, isTogether: true, soldOut: false },

    // --- 6. Silver ---
    { id: 41, category: "Silver", price: "900", available: 12, isTrusted: true, isTogether: true, soldOut: false },
    { id: 42, category: "Silver", price: "850", available: 4, isTrusted: false, isTogether: true, soldOut: false },
    { id: 43, category: "Silver", price: "950", available: 0, isTrusted: true, isTogether: true, soldOut: true },
    { id: 44, category: "Silver", price: "880", available: 10, isTrusted: false, isTogether: false, soldOut: false },
    { id: 45, category: "Silver", price: "920", available: 2, isTrusted: true, isTogether: true, soldOut: false },
    { id: 46, category: "Silver", price: "800", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 47, category: "Silver", price: "940", available: 6, isTrusted: true, isTogether: false, soldOut: false },
    { id: 48, category: "Silver", price: "870", available: 8, isTrusted: false, isTogether: true, soldOut: false },

    // --- 7. Bronze 1 ---
    { id: 49, category: "Bronze 1", price: "600", available: 8, isTrusted: true, isTogether: true, soldOut: false },
    { id: 50, category: "Bronze 1", price: "550", available: 2, isTrusted: false, isTogether: true, soldOut: false },
    { id: 51, category: "Bronze 1", price: "650", available: 0, isTrusted: true, isTogether: true, soldOut: true },
    { id: 52, category: "Bronze 1", price: "580", available: 15, isTrusted: false, isTogether: false, soldOut: false },
    { id: 53, category: "Bronze 1", price: "620", available: 1, isTrusted: true, isTogether: true, soldOut: false },
    { id: 54, category: "Bronze 1", price: "500", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 55, category: "Bronze 1", price: "640", available: 4, isTrusted: true, isTogether: false, soldOut: false },
    { id: 56, category: "Bronze 1", price: "570", available: 6, isTrusted: false, isTogether: true, soldOut: false },

    // --- 8. Bronze 2 ---
    { id: 57, category: "Bronze 2", price: "500", available: 6, isTrusted: true, isTogether: true, soldOut: false },
    { id: 58, category: "Bronze 2", price: "450", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 59, category: "Bronze 2", price: "550", available: 4, isTrusted: true, isTogether: true, soldOut: false },
    { id: 60, category: "Bronze 2", price: "480", available: 10, isTrusted: false, isTogether: false, soldOut: false },
    { id: 61, category: "Bronze 2", price: "520", available: 2, isTrusted: true, isTogether: true, soldOut: false },
    { id: 62, category: "Bronze 2", price: "400", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 63, category: "Bronze 2", price: "540", available: 5, isTrusted: true, isTogether: false, soldOut: false },
    { id: 64, category: "Bronze 2", price: "470", available: 7, isTrusted: false, isTogether: true, soldOut: false },

    // --- 9. Bronze 3 ---
    { id: 65, category: "Bronze 3", price: "400", available: 10, isTrusted: true, isTogether: true, soldOut: false },
    { id: 66, category: "Bronze 3", price: "350", available: 3, isTrusted: false, isTogether: true, soldOut: false },
    { id: 67, category: "Bronze 3", price: "450", available: 0, isTrusted: true, isTogether: true, soldOut: true },
    { id: 68, category: "Bronze 3", price: "380", available: 12, isTrusted: false, isTogether: false, soldOut: false },
    { id: 69, category: "Bronze 3", price: "420", available: 2, isTrusted: true, isTogether: true, soldOut: false },
    { id: 70, category: "Bronze 3", price: "300", available: 0, isTrusted: false, isTogether: true, soldOut: true },
    { id: 71, category: "Bronze 3", price: "440", available: 5, isTrusted: true, isTogether: false, soldOut: false },
    { id: 72, category: "Bronze 3", price: "370", available: 8, isTrusted: false, isTogether: true, soldOut: false },
];
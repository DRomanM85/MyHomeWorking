const products = [
    { name: 'Apple iPhone', price: 1500, availability: 5, discribe: "Телефон дзвонилка" },
    { name: 'Samsung Galaxy', price: 2000, availability: 3, discribe: "Телефон андроїд" },
    { name: 'LG TV', price: 500, availability: 11, discribe: "Телік для серіалів" },
    { name: 'AR15', price: 1700, availability: 55, discribe: "Опис ще не задано" },
    { name: 'VW Golf', price: 20000, availability: 1, discribe: "Машина пушка ракета" },
    { name: 'Sony PlayStation 5', price: 500, availability: 8, discribe: "Геймконсоль нового покоління" },
    { name: 'Dell XPS 13', price: 1200, availability: 10, discribe: "Ноутбук з високоякісним екраном" },
    { name: 'Canon EOS R5', price: 3500, availability: 0, discribe: "Дзеркальна камера для професіоналів" },
    { name: 'Nike Air Max', price: 120, availability: 20, discribe: "Спортивні кросівки" },
    { name: 'KitchenAid Stand Mixer', price: 300, availability: 15, discribe: "Кухонний міксер" },
    { name: 'Fitbit Charge 5', price: 150, availability: 25, discribe: "Смарт-годинник та фітнес-трекер" },
    { name: 'Samsung QLED Q90T', price: 1500, availability: 5, discribe: "4K QLED телевізор" },
    { name: 'Google Pixel 6', price: 800, availability: 0, discribe: "Смартфон зі штучним інтелектом" },
    { name: 'Nintendo Switch', price: 300, availability: 12, discribe: "Портативна геймконсоль" },
    { name: 'Ray-Ban Aviator Sunglasses', price: 150, availability: 30, discribe: "Сонцезахисні окуляри" },
    { name: 'Bose QuietComfort 35 II', price: 250, availability: 8, discribe: "Бездротові навушники з шумозаглушенням" },
    { name: 'Microsoft Surface Pro 7', price: 900, availability: 6, discribe: "Планшет та ноутбук в одному" },
    { name: 'GoPro Hero 10', price: 500, availability: 4, discribe: "Екшн-камера з високою роздільною здатністю" },
    { name: 'Adidas Ultraboost', price: 180, availability: 18, discribe: "Бігові кросівки" },
    { name: 'LG UltraFine 4K Display', price: 700, availability: 2, discribe: "4K монітор від LG" },
];

order = 
    { quentity: 0, amount: 0, discount: 0, finalPrice: 0 };
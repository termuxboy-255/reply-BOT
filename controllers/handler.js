const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./config/database.json'));

const handleMessage = (msg) => {
  if (["hi", "hello", "mambo", "habari"].includes(msg.toLowerCase())) {
    return "Hey! Karibu Kadili Phone Store. Chagua namba:\n1. Android\n2. iPhone";
  }
  if (msg === "1") {
    return "Chagua kampuni:\n3. Samsung\n4. Tecno\n5. Infinix";
  }
  if (msg === "2") {
    let iphones = Object.keys(db.iphone).map((phone, index) => `${index + 6}. ${phone}`).join('\n');
    return `Chagua iPhone:\n${iphones}`;
  }

  let androidBrands = Object.keys(db.android);
  let brandIndex = parseInt(msg) - 3;
  if (brandIndex >= 0 && brandIndex < androidBrands.length) {
    let brand = androidBrands[brandIndex];
    let phones = Object.keys(db.android[brand]).map((phone, i) => `${brandIndex * 10 + i + 6}. ${phone}`).join('\n');
    return `Chagua simu kutoka ${brand}:\n${phones}`;
  }

  for (let brand in db.android) {
    let phones = Object.keys(db.android[brand]);
    let phoneIndex = parseInt(msg) - 6;
    if (phoneIndex >= 0 && phoneIndex < phones.length) {
      let phone = phones[phoneIndex];
      let price = db.android[brand][phone];
      return `${phone} - Tsh ${price}/=. Andika kiasi unacholipa kama malipo ya awali.`;
    }
  }

  if (parseInt(msg) >= 6) {
    let iphones = Object.keys(db.iphone);
    let phoneIndex = parseInt(msg) - 6;
    if (phoneIndex >= 0 && phoneIndex < iphones.length) {
      let phone = iphones[phoneIndex];
      let price = db.iphone[phone];
      return `${phone} - Tsh ${price}/=. Andika kiasi unacholipa kama malipo ya awali.`;
    }
  }

  if (!isNaN(parseInt(msg))) {
    return "Asante! Malipo yako yamerekodiwa. Simu yako italetwa na muuzaji wetu.";
  }

  return "Samahani, sifahamu chaguo hilo. Tafadhali chagua kwa namba.";
};

module.exports = { handleMessage };

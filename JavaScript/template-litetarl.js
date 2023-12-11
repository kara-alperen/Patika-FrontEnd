// ************* Template Literals

let username = "alp"
const DOMAIN = "kosluyoruz.org"

let email = username + "@" + DOMAIN
// console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresi:", email)

let info = `
Merhaba ${username} sitemize hoşgeldin...
mail adresin: ${email}

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2  + 3) * 10} TL
günün saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}

`
console.log(info)

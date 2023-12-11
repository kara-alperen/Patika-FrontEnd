//  *********** String veri

let email = "alpkar@gmail.com"
let firstName = "alp"
let lastName = "kar"

// string karakter sayisi 'length'
console.log(email.length)

// ilk karakteri bulma '[0]'
console.log(firstName[0])
console.log(firstName.charAt(0))

// büyük - küçük harf
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// string içinde istediğimiz bilgiyi aramak ve yerini bulmak 'search'
console.log(email.search("@"))
console.log(email[6])

email.search('olmayan') // -1

// belli bir yere kadarr al 'slice' (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.') )  // sadece gmail kısmı
)

// bilgiyi değiştir 'replace'
email = email.replace('gmail.com', 'kodla.org')
console.log(email)

// istediğim bilgi var mı 'includes'
email.includes('asdaf') //false  
email.includes('@') //false                   

// istediğim bilgi ile başladi bitti mi 'starsWidth' 'endWidth'
console.log(
    email.endsWith('kodla.org')    
)
// ilk harfleri büyük yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)}${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)
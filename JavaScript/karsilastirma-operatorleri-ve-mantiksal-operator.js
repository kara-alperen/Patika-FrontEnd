// ************* Karşılaştırma ve Mantıksal operatrler

let price = 100
let user = "quest"

// Eşitse '=='

console.log( price == 1)
console.log( price == 100)

// Hem değeri hem de türü eşitse '==='

console.log( price === 1)
console.log( price === 100)

// Eşit dğilse '!='

console.log(user != "quest")
console.log(user != "alp")

// Küçükse '<'

console.log( price < 1000)
console.log( price < 1)
// Küçük veya eşitse '<='

console.log( price <= 90)
console.log( price <= 100)

// Büyükse '>'

console.log( price > 101)
console.log( price > 99)

// Büyük veya eşitse '>='

console.log( price >= 100)
console.log( price >= 101)
// Ve '&&'

price = 0
console.log( price > -1 && user != "quets" )

// Veya '||'

console.log( price > -1 || user != "quets" )

// Değil (tersi) '!'

console.log( price > 1 && ! user != "quets" )

console.log(!!2);



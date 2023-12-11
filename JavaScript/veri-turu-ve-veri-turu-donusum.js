// *********** Veri Turu ve Veri Turu Donusumleri

// veri turu typof
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

//  string(metinsel) bilgileri int ve float a donusturmek
let number1 = "11"
number1 = parseInt(number1)
console.log("number1:", number1, typeof(number1))

let number2 = "11.4px"
number2 = parseFloat(number2)
console.log("number2:", number2, typeof(number2))

//  number veri tipinde strring e dönüştürmek
let number3 = 55
number3 = number3.toString()
console.log("number3:", typeof(number3))

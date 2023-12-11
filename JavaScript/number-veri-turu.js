// *********** Number *********
// number veri 
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price, 
    "kDV Oranı:", tax, 
    "KDV Tutar:", priceTax,
    "Fiyat:" ,total
    )
let stringNumber = "111"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)

//  arttırma ve azaltma
let counter = 300
counter = counter + 1 //uzun yöntem
console.log(counter)
counter +=1;
console.log(counter)
counter ++;
console.log(counter)

counter --;
console.log(counter)
counter -= 1;
console.log(counter)
counter *10;
console.log(counter)
counter /10;
console.log(counter)
counter /= 2;
console.log(counter)

// işlem önceliği
console.log( 2 + 3 * 10)
console.log( (2 +3 ) * 10)

// mod(kalan) %
// sayı tek çitf ?
console.log( 17 % 2) // 0 ise çift 1 ise tek

// 8 ürün alan koliye tüm ürünler sığğıyor mu?
console.log("koli örn", 18 % 8)

// üs alma **
console.log( 2 * 2 * 2 *2 )
console.log( 2 ** 4)

// Math.floor  aşağı yuvarlama
console.log( Math.floor(1.7) )

// Math.ceil   yukarı yuvarlma
console.log( Math.ceil(1.7) )

// math.round  yakına yuvarlama
console.log( Math.round(1.7) )
console.log( Math.round(1.4) )



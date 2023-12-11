//  Çoklu koşul yapisi

let userName = prompt("Kullanici adi: ")
let age = prompt("Yasiniz")

if (userName && age >= 18) {
    console.log("alabilirsin")
} else if (!userName) {
    console.log("kullanici adi yok")
} else if (!age) {
    console.log("yas bilginiz yok")
} else if (!(age >= 18)) {
    console.log("Yasiniz 18 den kücük")
}
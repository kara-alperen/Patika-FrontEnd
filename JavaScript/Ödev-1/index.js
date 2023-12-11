
function currentDate () { 
    // dom öğemizi seçiyoruz
    let clock = document.querySelector("#myClock"); 
    let today = new Date (); // saat ayarlamak için
    // default olarak günler sayı olarak geliyor bu yüzden yeni array oluşturdum
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
    let day = days[today.getDay()]; // oluşturduğum arrayden gün çekecek
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ` ${day}` // saat, dakika, saniye, gün şeklinde ayarlıyoruz

    let currentTime = `${time}`
    clock.innerHTML = currentTime // currentTime değerini html'e yazdırıyoruz

    // dinamik saniye bilgisi için
    setTimeout(currentDate, 1000) 

}

currentDate ();

let firstName = prompt("Lütfen adınızı girin: ") // İsim girmemizi isteyen prompt
let greeting = document.querySelector("#myName") // DOM öğemizi seçiyoruz
let body = document.querySelector(".bg-dark") // eğer isim girilmez ise düzenlemek istediğim DOM öğesini seçtim

// isim girilmediği durumda görüntülenecek DOM öğesine style verdim
body.style.color = "orange"
body.style.textAlign = "center"
body.style.fontSize = "20px"

greeting.innerHTML = `${firstName}` // DOM öğesinin değerini prompt'a girilen değere eşitledim.

if (!firstName) {
    body.innerHTML= "Lütfen isim kısmını boş bırakmayın" // isim girilmediği takdirde  Body öğesini bir uyarı yazısıyla değiştirdim
}

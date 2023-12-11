//  **************** Koşullar

let username = prompt("Kullanıci adi: ")
// eğer kullanıcı bilgisi varsa ekrana ismini yazdır
// eğer (username.length > 0 {consolo.log(usernam)}) değilse {console.log("bilgi yok")}
// if (username.length > 0 {consolo.log(usernam)})  else {console.log("bilgi yok")}

if (username.length > 0) { // if her zaman true ise çalışır
    console.log(`kulanıcı bilginiz ${username}`)
} else {
    console.log(`bilgi yok`)
}

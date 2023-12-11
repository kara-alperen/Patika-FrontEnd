// *********** prompt ile kullanıcıdan bilgi alma

let fullName = prompt("Lütfen adinizi Gir: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>      `
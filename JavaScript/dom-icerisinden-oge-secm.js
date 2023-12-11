// ************ dom Icerisinden oge

// let title = document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML = "degisen bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
link.innerHTML += "link bilgisi degisti"

link.style.color = "red"
link.classList.add('btn')
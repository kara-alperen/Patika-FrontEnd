//  *************** css class ekleme ve çıkarma

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primar")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-info", "third-info") // bbirden fazla sınıf eklem

greeting.classList.remove("text-primar")

console.log(greeting.classList)
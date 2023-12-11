// *********** liste içindeki son elama ulaşmak

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML ="degisti1"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML ="degisti2"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "ekleme1"
ulDOM.append(liDOM) // en sona ekleme

liDOM.innerHTML = "ekleme2"
ulDOM.prepend(liDOM) // en başa ekleme




/* index code
<ul id="list">
        <li>Lorem, ipsum.</li>
        <li>Sed, velit.</li>
        <li>Ullam, molestias!</li>
</ul>
*/
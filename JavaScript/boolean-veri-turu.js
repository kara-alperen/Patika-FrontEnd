// ********* boolean Veri **********

// 0 ve 1
let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") //true
Boolean("0") //true
Boolean("") //false

userName="user"
console.log("User Name", Boolean(userName))


//  0, -0, null, false, NaN, undefined, ("")

Boolean(0) //false
Boolean(-0) //false
Boolean(-0.1) //ture
Boolean(0 === 0) //true


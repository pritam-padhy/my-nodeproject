
var str = "12345678";

var newStr = str.match(/.{1,4}/g).join("-");

console.log(newStr);

;
var str = "Hello@#$%^&*()_";

var newStr = str.replace(/[^&\/\\#+()$~%'":*?<>{}]/g, '');

console.log(newStr);
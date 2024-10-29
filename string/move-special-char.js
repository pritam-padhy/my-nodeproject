var str = 'hello@#hi&';
var charStr = str.replace(/[^A-Za-z]/g, '');
var specialCharsStr = str.replace(/[A-Za-z]/g, '');
var finalResult = charStr + specialCharsStr;
console.log(finalResult);
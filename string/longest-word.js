var longest = function (str){ 
    str = str.split(" ");
    return str.sort((a, b) => b.length - a.length)[0];
} 

console.log(longest("This is a javascript programme"));
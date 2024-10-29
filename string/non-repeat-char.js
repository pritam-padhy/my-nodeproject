var nonRepeated = function (str) {
    for (var i = 0; i < str.length; i++) {
        var j = str.charAt(i)
        if (str.indexOf(j) == str.lastIndexOf(j)) {
            return j;
        }
    }
    return null;
}
console.log(nonRepeated("Entertainment"));
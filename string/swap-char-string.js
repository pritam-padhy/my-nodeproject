function swap(str) {
    let newLetters = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            newLetters += str[i].toLowerCase();
        } else {
            newLetters += str[i].toUpperCase();
        }
    }
    return newLetters;
}
console.log(swap('The Quick Brown Fox')); 
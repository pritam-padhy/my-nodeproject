function shiftCharacters(str) {
    let shiftedStr = '';

    for (const char of str) {
        const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
        shiftedStr = shiftedStr +  nextChar;
    }

    return shiftedStr;
}

const myString = "hello";
const shiftedString = shiftCharacters(myString);
console.log(shiftedString);
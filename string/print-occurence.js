function printCharacterOccurrences(str) {
    const charCount = {};

    for (const char of str) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    for (const char in charCount) {
        console.log(`'${char}': ${charCount[char]}`);
    }
}

const myString = "hello world";
printCharacterOccurrences(myString);
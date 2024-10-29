function checkAnagram(a, b) {

    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');

    return result = (str1 === str2);
}

console.log(checkAnagram('listen', 'silent'));
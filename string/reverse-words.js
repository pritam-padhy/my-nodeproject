
var reverseWords = function (str){
    var words = str.split(" ");
    console.log(words);
    var updatedWords = words.reverse();
    console.log(updatedWords);
    return updatedWords.join(" ");
}

console.log(reverseWords("My name is Ptitam"));
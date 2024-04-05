// 4. Найдите самое длинное слово в строке.



function findLongestWordLength(sentence) {
    let words = sentence.split(" ");
    let maxLength = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    
    return maxLength;
}

    let sentence = "The quick brown fox jumped over the lazy dog";
    let longestWordLength = findLongestWordLength(sentence);
    console.log(longestWordLength);


  
//jshint esversion:6

function isVowel(letter) {
  return /^[aeiou]/i.test(letter);
}

function isVowelAndY(letter) {
  return /^[aeiouy]/i.test(letter);
}

function igpayAtinlay(word) {
  let pigWord = "";
  let wordNoPunc = "";
  const rePunc = /;|\.|!|,|\?|:|\//g;

  const firstChar = word.substr(0, 1);
  let punc = word.match(rePunc);
  let index = word.indexOf(punc);

  if (punc) {
    wordNoPunc = word.slice(0, index);
  } else {
    wordNoPunc = word;
  }

  if (isVowel(firstChar)) {
    
    //.filter(Boolean) removes punc if it's a null value, otherwise would need an if statement
      pigWord = [wordNoPunc, "yay", punc].filter(Boolean).join("");

  } else if (!isVowel(firstChar)) {
    //start from index 1 so it ignores leading "y"
    let i = 1;
    let consonants = "";
    while (i < word.length && !isVowelAndY(wordNoPunc.substr(i, 1))) {
      i++;
      consonants = wordNoPunc.slice(1, i);
    }
    consonants = firstChar + consonants;
    let secondHalf = wordNoPunc.slice(consonants.length);
    if (firstChar === firstChar.toUpperCase() && wordNoPunc.length !==1) {
        consonants = consonants.toLowerCase();
        secondHalf = secondHalf.charAt(0).toUpperCase() + secondHalf.substr(1);
    }
    pigWord = [secondHalf, consonants, "ay", punc].filter(Boolean).join("");
  }

  // console.log(word, pigWord);
  return pigWord;
}

const pigify = (text) => {
  text = text.trim(); //remove leading & trailing whitespace
  const reLine = /\n+/;
  const reSpace = /\s+/;
  const paragraphArray = text.split(reLine);
  // console.log(paragraphArray);
  const wordArray = paragraphArray.map((paragraph) => {
    paragraph = paragraph.trim();
    return paragraph.split(reSpace);
  });
  // console.log(wordArray);
  wordArray.forEach(paragraph => {
    paragraph.forEach(word => {
      
    })
  }) 

  const pigWordArray = wordArray.map(paragraph => paragraph.map(word => igpayAtinlay(word)));
  console.log(wordArray);
  const pigParaArray = pigWordArray.map(paragraph => paragraph.join(' '));
  return pigParaArray;
};

module.exports = pigify;

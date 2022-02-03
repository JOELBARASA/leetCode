var isPrefixOfWord = function (sentence, searchWord) {
  console.log(sentence.includes(searchWord));
  if (typeof sentence !== 'string' || typeof searchWord !== 'string' || sentence.length < 0) {
    return -1;
  }
  else {
    if (sentence.includes(searchWord) === false) {
      return -1;
    }
    else {
      let sentenceArray = sentence.split(" ");      
      console.log(sentenceArray);
      for (let i = 0; i < sentenceArray.length; i++) {
        console.log(sentenceArray[i].toString().startsWith(searchWord));
        if (sentenceArray[i].toString().startsWith(searchWord))
          return i + 1;
      }
      return -1;
    }
  }
};

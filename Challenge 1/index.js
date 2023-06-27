function SearchingChallenge(str) { 

  // code goes here  
  let haveMoreDupChar = "";
  let alphaDuplicates = [];
  let noRepeat = [];
  let words = str.split(" "); // to split string into array so that I can have seperated words

  /** Looping throw each word */
  for(let i=0; i<words.length; i++){
    /** Looping throw each character in each word */
    let duplicates = [];
    for(let index=0; index<words[i].length; index++){
      /** how many time this char duplicates */
      let duplicateCount = getDuplicate(words[i][index], words[i]);
      if( duplicateCount > 0 ){
        duplicates.push(duplicateCount);
      }
    }
    if(duplicates.length == 0){
      noRepeat.push(0);
    }else if(duplicates.length > alphaDuplicates.length){
      alphaDuplicates = duplicates;
      haveMoreDupChar = words[i];
    }
  }
  if( noRepeat.length == words.length){
    haveMoreDupChar = -1;
  }
  let challengeToken = haveMoreDupChar+'fpk6ou1lb5';
  for(let i=2; i<=challengeToken.length; i++){
    if( (i+1)%3 == 0){
      challengeToken = challengeToken.substring(0,i) + 'X' + challengeToken.substring(i+1);
    }
  }
  return challengeToken; 

}

function getDuplicate(char, words){
  let duplicateCount = 0;
  for(let i=0; i<words.length; i++){
    if( char == words[i]){
      duplicateCount++;
    }
  }
  return duplicateCount-1;
}
   
// keep this function call here 
console.log(SearchingChallenge(readline()));
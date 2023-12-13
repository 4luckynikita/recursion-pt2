/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


***********************************************************************/
/*
function reverse(str){
  let wordArr = str.split('');
  let wordArrLength = wordArr.length;
  for(let i=wordArrLength;i>0;i--){
    let removed = wordArr.pop();
    console.log(wordArr, " ", removed);

  }
  return wordArr;
}

console.log(reverse("house"));
*/

function reverse(str) {
  // Your code here 
  if(str === undefined||str === '') return '';
  
  let letter1 = str.split('');
  let removed =  letter1.pop();
  let remainder = letter1.join('');
  return removed + reverse(remainder);
}

console.log(reverse("house"));
console.log(reverse("dog"));
console.log(reverse("atom"));
console.log(reverse("q"));
console.log(reverse("id"));
console.log(reverse(""));


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}

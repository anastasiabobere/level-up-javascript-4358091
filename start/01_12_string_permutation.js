// Write your code here
function numPermutations(letters){
  if(letters.length === 1){
    return 1
  }
  else{
  return letters.length * numPermutations(letters.slice(1));
  }
}
console.log(numPermutations("hello"))
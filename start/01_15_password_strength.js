// Write your code here
function checkPassword(password){
  let oneLowerCaseLetter= /(?=.+[a-z])/
  let oneUpperCaseLetter= /(?=.+[A-Z])/
  let oneNumber= /(?=.+[0-9])/
  let oneSpecialCharacter= /(?=.+[!@$#%^&*])/
  let minimumEightCharacters = /(?=.{8,})/;
  let isValid =
  oneLowerCaseLetter.test(password) && oneUpperCaseLetter.test(password) && oneNumber.test(password) && oneSpecialCharacter.test(password) && minimumEightCharacters.test(password)
  return isValid ? "Password is valid" : "not valid"
}
console.log(checkPassword("abc"));
console.log(checkPassword("9Ab!4567"))

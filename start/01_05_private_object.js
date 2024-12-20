// Write your code here
const password = Symbol("password")
const username = Symbol("username")
const user = {
  [username] : "Leo",
  [password] : "3921id",
  age:20
}
console.log(user.age)
console.log(user.username) //undefined
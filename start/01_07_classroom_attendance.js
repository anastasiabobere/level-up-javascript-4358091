function getStudents(classRoom){
  let teacher, assistiant, students
if(classRoom.hasTeach){
  [teacher, assistiant, ...students]= classRoom.arrays
}else{
  [teacher, ...students]=classRoom.arrays
}
console.log(students)
}
const classs = {
  hasTeach: true,
  arrays :["Ronda","Amelia", "Anton","Goroh","Nadja"]
}
getStudents(classs)

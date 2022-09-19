const student = {
    name: 'Kate',
    surname: 'Esenina',
    age: 21
  }
    
  function getStudentInfo(){
    for(let key in student){
      if(student.hasOwnProperty(key)){
        console.log(key + ': ' + student[key]);
      }
    }
  }
  
  getStudentInfo(student)
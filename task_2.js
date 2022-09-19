function getStudentInfo(str, student){
    return(str in student);
  }
  
  getStudentInfo('name', {name: 'Kate', surname: 'Esenina', age: 21});
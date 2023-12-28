
//================================================================================================================================//

const user = {
  id: 1,
  username: 'john_doe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
const { id, username, fullName: { firstName, lastName } } = user;

console.log(id);        
console.log(username); 
console.log(firstName);
console.log(lastName);

/*
1
john_doe
John
Doe
*/

//================================================================================================================================//

const complexObject = {
  school: 'ABC High School',
  classes: {
    math: {
      teacher: 'Mrs. Johnson',
      students: [
        { name: 'Piyush', grade: 10 },
        { name: 'Aman', grade: 11 }
      ]
    },
    science: {
      teacher: 'Mr. Smith',
      students: [
        { name: 'Emma', grade: 10 },
        { name: 'Ryan', grade: 11 }
      ]
    }
  },
  extracurriculars: {
    clubA: ['Alice', 'Bob'],
    clubB: ['Charlie', 'Diana']
  }
};
const{school,classes:{
math:{teacher:mathTeacher,students:[{name:mathStudentName,grade:mathStudentGrede}]},
science:{teacher:scienceTeacher,students:[{name:scienceStudentName,grade:scienceStudentGrade}]}},
extracurriculars:{clubA,clubB}}=complexObject;

console.log(school);
console.log(mathTeacher);
console.log(mathStudentName,mathStudentGrede);
console.log(scienceTeacher);
console.log(scienceStudentName,scienceStudentGrade);
console.log(clubA,clubB);

/*
output:

ABC High School
Mrs. Johnson
Piyush 10
Mr. Smith
Emma 10
[ 'Alice', 'Bob' ] [ 'Charlie', 'Diana' ]
*/

//================================================================================================================================//

const complexObject = {
  school: 'ABC High School',
  classes: {
    math: {
      teacher: 'Mrs. Johnson',
      students: [
        { name: 'Piyush', grade: 10 },
        { name: 'Aman', grade: 11 }
      ]
    },
    science: {
      teacher: 'Mr. Smith',
      students: [
        { name: 'Emma', grade: 10 },
        { name: 'Ryan', grade: 11 }
      ]
    }
  },
  extracurriculars: {
    clubA: ['Alice', 'Bob'],
    clubB: ['Charlie', 'Diana']
  }
};
const{school,classes:{
math:{teacher:mathTeacher,students:[,{name:mathStudentName,grade:mathStudentGrede}]},
science:{teacher:scienceTeacher,students:[{name:scienceStudentName,grade:scienceStudentGrade}]}},
extracurriculars:{clubA,clubB}}=complexObject;

console.log(school);
console.log(mathTeacher);
console.log(mathStudentName,mathStudentGrede);
console.log(scienceTeacher);
console.log(scienceStudentName,scienceStudentGrade);
console.log(clubA,clubB);

/*
output:

ABC High School
Mrs. Johnson
Aman 11
Mr. Smith
Emma 10
[ 'Alice', 'Bob' ] [ 'Charlie', 'Diana' ]
*/

//================================================================================================================================//



function totalVotes(arr) {
   return arr.reduce((acc,curr)=>{
        if(curr.voted===true)
        {
            return acc=acc+1;
        }
        return acc;
    },0);
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters));
/*
output:
7
*/
function voterResults(arr) {
  let numYoungVotes = 0;
  let numYoungPeople = 0;
  let numMidVotesPeople = 0;
  let numMidsPeople = 0;
  let numOldVotesPeople = 0;
  let numOldsPeople = 0;

  arr.reduce((acc, curr) => {
    if (curr.age >= 18 && curr.age <= 25) {
      numYoungPeople += 1;
      if (curr.voted === true) {
        numYoungVotes += 1;
      }
    }

    if (curr.age >= 26 && curr.age <= 35) {
      numMidsPeople += 1;
      if (curr.voted === true) {
        numMidVotesPeople += 1;
      }
    }

    if (curr.age >= 36 && curr.age <= 55) {
      numOldsPeople += 1;
      if (curr.voted === true) {
        numOldVotesPeople += 1;
      }
    }
    // Add this return statement
    return acc;
  }, {}); // Add an empty object as the initialValue for reduce

  return {
    numYoungVotes,
    numYoungPeople,
    numMidVotesPeople,
    numMidsPeople,
    numOldVotesPeople,
    numOldsPeople,
  };
}

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];

console.log(voterResults(voters));
/*
output:

{
  numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

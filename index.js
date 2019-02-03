let arr = [
         {fullName: "muhamed", lastName: "mwafaq", age: 25, married: false, email: "mohamet@gmail.com", address: "erbil", avgScore: 61.234},
         {fullName: "ali", lastName: "younes", age: 22, married: true, email: "example@gmail.com", address: "erbil", avgScore: 78.234},
         {fullName: "ahmed", lastName: "azad", age: 22, married: false, email: "ahmed@gmail.com", address: "erbil", avgScore: 80.8853},
         {fullName: "omer", lastName: "xaled", age: 23, married: true, email: "omer@gmail.com", address: "kirkuk", avgScore: 74.52}
];


console.log(
   //arr.filter(s => s.avgScore < 75)
   arr.map(s => {
      if(s.avgScore < 75){
         return{
         ...s,
         avgScore: s.avgScore + 1, 
         
      }
   }
})
);

//    arr.reduce((accu, current) => accu + current.fullName.length + current.lastName.length, 0)
// );

// arr.map((s, i) => {
//    console.log(s.age);
// });

// arr.forEach((s, i) => {
//    console.log(s.age);
// });

// let students = [
//                 {name: 'muhamed', age: 25, married: false, score: 61.32}, 
//                 {name: 'ali', age: 22, married: false, score: 70}, 
//                 {name: 'omer', age: 20, married: false, score: 75},
//                 {name: 'ahmed', age: 30, married: false, score: 80}
//                    ];

// const names = [];

// for(const student of students){
    
//     names.push(student.name);
    
//  }

// console.log(names);

// const moreThan20 = students.filter(s => s.name == 'a*');

// console.log(moreThan20);

// const obj = {fullName: "muhamed", lastName: "mwafaq", age: 25, married: false, email: "mohamet@gmail.com", address: "erbil", aveScore: 61.234};

// const { fullName, ...rest} = obj;

// console.log(fullName);
// console.log(rest);
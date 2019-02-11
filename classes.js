class School{
   constructor() {

      this.teachers = [];
      this.students = [];      
   }

   addTeacher(teacher){
      this.teachers.push(teacher);
   }

   registerStudent(student){
      this.students.push(student);
   }

   fireTeacher(index){
      this.teachers.splice(index, 1);
   }

   fireStudent(index){
      this.students.splice(index, 1);
   }

}

class Teacher{

   
}

class Student{
   
}

const school1 = new School();

school1.addTeacher('Ahmed');

school1.addTeacher('Azad');

school1.registerStudent('Muhamed');

school1.registerStudent('Ali');


console.log(school1.teachers);

console.log(school1.students);

school1.fireStudent(1);

school1.fireTeacher(0);

console.log(school1.teachers);

console.log(school1.students);






//////////////////////////////////////////
// class Library {
//    constructor() {
//       this.book = [];
//    }

//    addBook(book) {
//       if (!(book instanceof Book)) throw Error('book is not of type Book');
//       this.book.push(book);
//    }


// }

// class Book {

//    constructor(isbn, title, numOfPages, author) {

//       this.isbn = isbn;
//       this.title = title;
//       this.numOfPages = numOfPages;
//       this.author = author;

//    }
// }

// class Author {
//    constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//    }
// }


// class Car{
//    constructor(engine, color, manufacturer, year){

//       if(!(color instanceof Color)){
//          throw Error('please enter a valid color');  
//       }

//       if(!(engine instanceof Engine)){
//          throw Error('please enter a valid engine type');
//       }

//       this.engine = engine;
//       this.tires = 4;
//       this.color = color;
//       this.manufacturer = manufacturer;
//       this.year = year;
//       this.speed = 0;
//       this.fuel = 0;
//       this.isStarted = false
//    }

//    reFill(amount){
//       this.fuel += amount;
//    }

//    start(){
//       if(this.fuel > 0){
//          this.isStarted = true;
//       }
//    }

//    stopEngine(){
//       this.isStarted = false;

//    }


//    drive(speed){

//       if(this.isStarted){
//          this.speed = speed;
//          this.fuel--;
//       }else{
//          console.log('start the engine');
//       }      
//    }
// }

// class Color{
//    constructor(color){
//       this.color = color;
//    }
// }

// class Engine{
//    constructor(name){
//       this.name = name;
//    }
// }

// const myCar = new Car(new Engine('v6'), new Color('black'), 'toyota', 2018);

// myCar.reFill(10);

// myCar.start();

// myCar.drive();
// myCar.drive();

// console.log(myCar);

// class Person{
//    constructor(name, age){

//       this.name = name;
//       this.age = age;
//    }

//    describe(name, age){

//       return `${this.name} is ${this.age} years old`;
//    }
// }

// const muhamed = new Person('muhamed', 20);

// muhamed.describe()

// const ali = new Person('Ali', 22);

// ali.describe();

// console.log(muhamed.describe());
// console.log(ali.describe())

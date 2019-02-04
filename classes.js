class Library{
   constructor(books, isbn, title, number, author)
}

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

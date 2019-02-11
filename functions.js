
const Person = function(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        // this.getFullName = function(){
            //     return this.firstName + " " + this.lastName;
            // }
            
            //creates a prototype which shared among all objects



            Person.prototype.getFullName = function(){
                return this.firstName + " " + this.lastName;
            
            }
        }
        
const p = new Person('Muhamed', 'Mofaq')
const p2 = new Person('Ali', 22);

Object.prototype.getFoo = function(){
    return 'foo';
}
        
p.__proto__.getFullName = function(){
    return 'hello';
}

console.log('p: ', p);
console.log('get foo: ', p.getFoo());
console.log('proto: ', p.__proto__)
console.log('proto of proto', p.__proto__.__proto__)
console.log('proto of proto has own property', p.__proto__.__proto__.hasOwnProperty('getFoo'))
console.log('proto of proto of proto', p.__proto__.__proto__.__proto__)
console.log(p.getFullName());

class Person {
    constructor (name, age) {
        this. name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this. name}`)
    }
}
let p1 = new Person ("adam", 25) ;
let p2 = new Person ("eve", 25);


//inheritance
class Student extends Person {
    constructor (name, age, marks){
    super (name, age);
    this.marks = marks;
}
    greet () {
        return "hello!";
    }
}
  let s1 = new Student ("adam", 25,95);
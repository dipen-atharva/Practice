// class Point {
//   x: number;
//   y: number;

//   constructor() {
//     this.x = 5;
//     this.y = 5;
//   }
// }
// const pt = new Point();
// console.log(pt.x + pt.y)


// ------------------------------------READONLY
// class Greeter {
//   readonly name: string = "Hello";
//   constructor(othername?: string) {
//     if (othername !== undefined) {
//       this.name == othername;
//     }
//   }
//   // err() {
//   //   this.name = "not ok";
//   // }
// }
// const g = new Greeter();
// console.log(g.name);


// CONSTRUCTOR - SUPER CALLS

// class Parent {
//   x = 7;
// }

// class Child extends Parent {
//   constructor() {
//     super()
//     console.log(this.x)
//   }
// }

// ------------------------GETTER/SETTER

// class Thing {
//   _size = 12;
//   get size(): number {
//     return this._size;
//   }
//   set size(value: string | number | boolean) {
//     let num = Number(value);
//     if (!Number.isFinite(num)) {
//       this._size = 0;
//       return;
//     }
//     this._size = 0;
//   }
// }

// const thg = new Thing();
// console.log(thg._size)

// ---------------IMPLEMENT CLAUSE

// interface Pingable {
//   ping(): void;
//   pong(): void;
// }
// class Sonar implements Pingable {
//   ping(): void {
//     console.log("Ping")
//   }
//   pong(): void {
//     console.log("pong")
//   }
// }
// class Ball implements Pingable {
//   ping() {
//     console.log("ping")
//   }
//   pong() {
//     console.log("pong")
//   }
// }
// let cd = new Sonar();
// console.log(cd)

// ---------------------------EXTENDS

// class Animal {
//   move() {
//     console.log("Moving Along");
//   }
// }
// class Dog extends Animal {
//   woof(times: number) {
//     for (let i = 0; i < times; i++) {
//       console.log("Woof!");
//     }
//   }
// }
// const d = new Dog();
// d.move();
// d.woof(4);

// method overriding ---------------
// class Base {
//   greet() {
//     console.log("Hello World");
//   }
// }
// class Derived extends Base {
//   greet(name?: string) {
//     if (name === undefined) {
//       super.greet();
//     } else {
//       console.log(`Hello , ${name.toLocaleLowerCase()}`)
//     }
//   }
// }
// const d = new Derived();
// d.greet();
// d.greet('Dipen');


// PUBLIC --- PRIVATE --- PROTECTED

// class Greeter {
//   public greet() {
//     console.log("hi!");
//   }
// }
// const g = new Greeter();
// g.greet();

// class Greeter {
//   public greet() {
//     console.log("Hello, " + this.getName());
//   }
//   protected getName() {
//     return "hi";
//   }
// }
//  
// class SpecialGreeter extends Greeter {
//   public howdy() {
//     // OK to access protected member here
//     console.log("Howdy, " + this.getName());
//   }
// }
// const g = new SpecialGreeter();
// g.greet(); // OK
// // g.getName();

// class Base {
//   private x = 0;
// }
// const b = new Base();
// // Can't access from outside the class
// console.log(b.x);


// THIS type in CLASS

// class Box {
//   contents: string = '';
//   set(value: string) {
//     this.contents = value;
//     return this;
//   }
// }

// class ClearableBox extends Box {
//   clear() {
//     this.contents = '';
//   }
// }

// const a = new ClearableBox();
// const b = a.set("hello");

// ABSTRACT CLASS
// abstract class Base {
//   abstract getName(): string;

//   printName() {
//     console.log("Hello, " + this.getName());
//   }
// }
// class Derived extends Base {
//   getName() {
//     return "world";
//   }
// }
// const d = new Derived();
// d.printName();
// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
//   }
// }
 
// class Mail {
//   constructor(sender, receiver, subject, body) {
//     this.sender = sender;
//     this.receiver = receiver;
//     this.subject = subject;
//     this.body = body;
//   }
// }

// class Car {
//  constructor(brand, color, maxSpeed, chassisNumber) {
//    this.brand = brand;
//    this.color = color;
//    this.maxSpeed = maxSpeed;
//    this.chassisNumber = chassisNumber;
//  }
// }

// const car1 = new Car('BMW', 'red', 200, 'b-1');
// const car2 = new Car('Audi', 'blue', 220, 'a-1');
// const car3 = new Car('BMW', 'black', 250, 'b-2');

// console.log(car1);
// console.log(car2);
// console.log(car3);
 
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
*/


// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     // Set a random chassis number
//     this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
//   }
// }
 
// const car1 = new Car('BMW', 'red', 200);
// const car2 = new Car('Audi', 'blue', 220);
// const car3 = new Car('BMW', 'black', 250);
 
// console.log(car1);
// console.log(car2);
// console.log(car3);
 
// /* Output:
// Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
// Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
// Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
// */


// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
//   }
// }
 
// const car = new Car('BMW', 'red', 200);
// car.chassisNumber = 'BMW-1';
 
// console.log(car);
 
// /* Output:
// Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
// */


// contoh accessor property
// class User {
//   constructor(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//  }
 
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
 
//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
 
// const user = new User('John', 'Doe');
// console.log(user);
// console.log(user.fullName);
 
// user.fullName = 'Fulan Fulanah';
// console.log(user);
// console.log(user.fullName);
 
/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/



// property chassisNumber tidak bisa diubah
// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
//   }
 
//   get chassisNumber() {
//     return this._chassisNumber;
//   }
 
//   set chassisNumber(chassisNumber) {
//     console.log('you are not allowed to change the chassis number');
//   }
// }
 
// const car = new Car('BMW', 'red', 200);
// console.log(car.chassisNumber);
// car.chassisNumber = 'BMW-1';
// console.log(car.chassisNumber);
 
/* Output:
BMW-232
you are not allowed to change the chassis number
BMW-232
*/



// method
// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
//   }
 
//   get chassisNumber() {
//     return this._chassisNumber;
//   }
 
//   set chassisNumber(chassisNumber) {
//     console.log('you are not allowed to change the chassis number');
//   }
 
//   // Methods
//   drive() {
//     console.log(`${this.brand} ${this.color} is driving`);
//   }
 
//   reverse() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }
 
//   turn(direction) {
//     console.log(`${this.brand} ${this.color} is turning ${direction}`);
//   }
// }
 
// class Mail {
//   constructor(sender, receiver, subject, body) {
//     this.sender = sender;
//     this.receiver = receiver;
//     this.subject = subject;
//     this.body = body;
//   }
 
//   // Methods
//   send() {
//     console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
//   }
 
//   sendLater(delay) {
//     console.log(`Sending after ${delay} ms`);
 
//     setTimeout(() => {
//       this.send();
//     }, delay);
//   }
 
//   saveAsDraft() {
//     console.log('Saving mail as draft');
//   }
// }

// const car = new Car('BMW', 'red', 200);
 
// car.drive();
// car.turn('left');
// car.reverse();
 
// /* Output:
// BMW red is driving
// BMW red is turning left
// BMW red is reversing
// */


// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this._chassisNumber = this._generateChassisNumber();
//   }
 
//   get chassisNumber() {
//     return this._chassisNumber;
//   }
 
//   set chassisNumber(chassisNumber) {
//     console.log('you are not allowed to change the chassis number');
//   }
 
//   // Methods
//   drive() {
//     console.log(`${this.brand} ${this.color} is driving`);
//   }
 
//   reverse() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }
 
//   turn(direction) {
//     console.log(`${this.brand} ${this.color} is turning ${direction}`);
//   }
 
//   _generateChassisNumber() {
//     return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
//   }
// }
 
// const car = new Car('BMW', 'red', 200);
 
// console.log(car._chassisNumber);
// car._chassisNumber = 'BMW-1';
// console.log(car._chassisNumber);
// console.log(car._generateChassisNumber());
 
// /* Output:
// BMW-85
// BMW-1
// BMW-667
// */



// Untuk menyelesaikan masalah ini, JavaScript versi ES2022 secara resmi mengenalkan cara dalam menetapkan hak akses private pada properti dan method objek, yakni dengan menambahkan tanda # di awal penamaan properti atau method.
// class Car {
//   #chassisNumber = null;
 
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.#chassisNumber = this.#generateChassisNumber();
//  }
 
//   get chassisNumber() {
//     return this.#chassisNumber;
//   }
 
//   set chassisNumber(chassisNumber) {
//     console.log('you are not allowed to change the chassis number');
//   }
 
//   // Methods
//   drive() {
//     console.log(`${this.brand} ${this.color} is driving`);
//   }
 
//   reverse() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }
 
//   turn(direction) {
//     console.log(`${this.brand} ${this.color} is turning ${direction}`);
//   }
 
//   #generateChassisNumber() {
//     return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
//   }
// }

// Khusus untuk properti yang sifatnya private, Anda harus mendeklarasikan propertinya di enclosing class seperti ini.
class Car {
  #chassisNumber = null; // enclosing class
 
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }
 
 get chassisNumber() {
    return this.#chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
 
  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
 
  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car = new Car('BMW', 'red', 200);
car.#generateChassisNumber();
console.log(car.#chassisNumber)



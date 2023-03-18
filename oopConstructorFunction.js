/* Kami rasa kode di atas sungguh tidak efektif. Bagaimana jika ada banyak mobil yang harus Anda buat? Contoh, Anda membangun aplikasi yang memiliki entitas pelanggan. Jika Anda menggunakan cara di atas, mampukah Anda membuat objek pelanggan jika aplikasi sudah digunakan oleh 100 pelanggan?

Dalam memecahkan masalah ini, OOP menawarkan sebuah solusi yakni dengan membuat object blueprint. Melalui object blueprint, kita bisa membuat cetakan untuk membuat objek yang sudah terdefinisikan macam-macam properti dan method-nya. Sehingga kita cukup menggunakan cetakan tersebut untuk membuat objek yang serupa, tetapi kita bisa menentukan nilai-nilai properti yang berbeda.

Contohnya, Anda bisa membuat sebuah blueprint bernama Car. Di dalam blueprint tersebut, Anda bisa definisikan properti-properti dan method yang ingin dimiliki objek mobil nantinya. Setelah membuat sebuah blueprint, Anda bisa dengan mudah membuat banyak objek mobil contohnya myCar, yourCar, dan dicodingCar dengan lebih mudah. */


// function Car(brand, color, maxSpeed, chassisNumber) {
//   this.brand = brand;
//   this.color = color;
//   this.maxSpeed = maxSpeed;
//   this.chassisNumber = chassisNumber;
// }

// Car.prototype.drive = function() {
//   console.log(`${this.brand} ${this.color} is driving`);
// }

// Car.prototype.reverse = function() {
//   console.log(`${this.brand} ${this.color} is reversing`);
// }

// Car.prototype.turn = function() {
//   console.log(`${this.brand} ${this.color} is turning`);
// }


// function Car(brand, color, maxSpeed, chassisNumber) {
//   this.brand = brand;
//   this.color = color;
//   this.maxSpeed = maxSpeed;
//   this.chassisNumber = chassisNumber;
// }

// Car.prototype.drive = function() {
//   console.log(`${this.brand} ${this.color} is driving`);
// }

// Car.prototype.reverse = function() {
//   console.log(`${this.brand} ${this.color} is reversing`);
// }

// Car.prototype.turn = function() {
//   console.log(`${this.brand} ${this.color} is turning`);
// }

// // Membuat objek mobil dengan constructor function Car
// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.drive();
// car2.drive();
// car3.drive();

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }

Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/


// const Car = (brand) => this.brand = brand;
 
// const car1 = new Car('Toyota');
 
/* Output
TypeError: Car is not a constructor
*/



// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
//   }

//   drive() {
//     console.log(`${this.brand} ${this.color} is driving`);
//   }

//   reverse() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }

//   turn() {
//     console.log(`${this.brand} ${this.color} is turning`);
//   }
// }

// // Membuat objek mobil dengan constructor function Car
// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.drive();
// car2.drive();
// car3.drive();

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }

Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/


class Car {};
console.log(typeof Car);

/* Output
function
*/
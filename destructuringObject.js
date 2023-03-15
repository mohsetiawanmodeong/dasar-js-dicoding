// const profile = {
//    firstName: "Setiawan",
//    lastName: "Modeong",
//    age: 23
// }

// const {firstName, lastName, age} = profile;

// console.log(firstName, lastName, age);

// /* output:
// John Doe 18
// */


// const profile = {
//   firstName: "Setiawan",
//   lastName: "Modeong",
//   age: 18
// }
 
// let firstName = "Wawan";
// let age = 20;
 
// // menginisialisasi nilai baru melalui destructuring object
// ({ firstName, age } = profile);
 
// console.log(firstName);
// console.log(age);
 
// /* output:
// John
// 18
// */


// // Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined. Contohnya:
// const profile = {
//   firstName: "Setiawan",
//   lastName: "Modeong",
//   age: 18
// }
 
 
// const { firstName, age, isMale } = profile;
 
// console.log(firstName)
// console.log(age)
// console.log(isMale)
 
// /* output:
// John
// 18
// undefined
// */


// Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan. Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai default-nya seperti ini:
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18
// }
 
 
// const { firstName, age, isMale = false } = profile;
 
// console.log(firstName)
// console.log(age)
// console.log(isMale)
 
/* output:
John
18
false
*/


const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
 
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
 
 
/* output:
John
Doe
18
*/
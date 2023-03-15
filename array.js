// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray);

// /* output:
// [ 'Cokelat', 42.5, 22, true, 'Programming' ]
// */

// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray[1]);

// /* output:
// 42.5
// */

// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);
// console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// /* output:
// Cokelat
// 42.5
// 22
// true
// Programming
// undefined
// Panjang nilai myArray adalah 5.
// */


// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// myArray.push('JavaScript');
// console.log(myArray);

// /* output
// [ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
//  */


// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// myArray.pop();
// console.log(myArray);

// /* output
// [ Cokelat, 42.5, 22, true ]
// */

// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// myArray.shift();
// myArray.unshift("Apple");

// console.log(myArray);

// /* output
// [ 'Apple', 42.5, 22, true, 'Programming' ]
// */


// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// delete myArray[1];
// console.log(myArray);

// /* output
// [ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
// */


const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/
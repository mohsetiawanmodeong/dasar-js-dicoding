// function init() {
//   const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
//   function greet() {      // Inner function, merupakan contoh closure
//     console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
//   }

//   greet();
// }

// init();

// /* output
// Halo, Obi Wan
//  */


// function init() {
//   const name = 'Obi Wan';

//   function greet() { // inner function -> function greet bisa mengakses variable name di init(), inilah yang dimaksud dengan lexical scope
//     console.log(`Halo, ${name}`);
//   }

//   return greet;
// }

// const myFunction = init();
// myFunction();

/* output
Halo, Obi Wan
 */

// Variabel pada mekanisme di atas telah tertutup (close covered), yang berarti variabel tersebut berada di dalam closure.


// let counter = 0;

// const add = () => {
//   return ++counter;
// }

// console.log(add()); // counter 0+1=1
// console.log(add()); // counter 1+1=2
// counter = 23;
// console.log(add()); // counter 23+1=24

/* output
1
2
24
 */


/* Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. 
  Seperti inilah contoh program counter yang dibuat dengan closure: */
const add = () => {
  let counter = 0;
    return () => {
      return ++counter;
  };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */
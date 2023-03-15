// const visitCountMap = new Map(); // Menyimpan daftar user

// function countUser(user) {
//    let count = visitCountMap.get(user) || 0;
//    visitCountMap.set(user, count + 1);
// }

// let wawan = { name: "Setiawan"};
// countUser(wawan); // Menambahkan user "Setiawan"

// wawan = null; // Data object "Setiawan" dihapus

// // delay dibutuhkan untuk menunggu gerbage collector bekerja
// setTimeout(function() {
//    console.log(visitCountMap);
// }, 1000)


const { inspect } = require('util');

const visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let wawan = { name: "Setiawan" };
countUser(wawan);  // Menambahkan user "Jonas"

wawan = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/
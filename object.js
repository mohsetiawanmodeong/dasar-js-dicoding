const user = {
   firstName: "Luke",
   lastName: "Skywalker",
   age: 19,
   isJedi: true,
   "home world": "Tattooine"
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);
/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/



// const spaceship = {
//    name: "Millenium Falcon",
//    manufacturer: "Corellian Engineering Corporation",
//    maxSpeed: 1200,
//    color: "Light gray"
// };

// spaceship.color = "Glossy red";
// spaceship["maxSpeed"] = 1300;
// console.log(spaceship);

/* output
{
   name: 'Millenium Falcon',
   manufacturer: 'Corellian Engineering Corporation',
   maxSpeed: 1300,
   color: 'Glossy red'
}
 */


// Tunggu dulu. Object spaceship dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?
// Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object.


// const spaceship = {
//    name: "Millenium Falcon",
//    manufacturer: "Corellian Engineering Corporation",
//    maxSpeed: 1200,
//    color: "Light gray"
// };

// spaceship.color = "Glossy red";
// spaceship["maxSpeed"] = 1300;
// spaceship.class = "Light freighter";

// console.log(spaceship);

/* output
{
   name: 'Millenium Falcon',
   manufacturer: 'Corellian Engineering Corporation',
   maxSpeed: 1300,
   color: 'Glossy red',
   class: 'Light freighter'
}
*/


const spaceship = {
   name: "Millenium Falcon",
   manufacturer: "Corellian Engineering Corporation",
   maxSpeed: 1200,
   color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */
// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

//const coffeeStock = require('./state.js');

// const {coffeeStock, isCoffeeMachineReady} = require('./state.js');
 
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//       console.log("Kopi berhasil dibuat!");
//     } else {
//       console.log("Biji kopi habis!");
//     }
//   }
   
// makeCoffee("robusta", 80);

// import coffeeStock from './state.js';
 
// const displayStock = stock => {
//   for (const type in stock) {
//     console.log(type);
//   }
// }
 
// displayStock(coffeeStock);

import _ from 'lodash';
import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
console.log(stock);
console.log(isCoffeeMachineReady);
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

const isCoffeeMachineReady = true;

// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady; tidak diperbolehkan

module.exports = {coffeeStock, isCoffeeMachineReady};

console.log(module);

 
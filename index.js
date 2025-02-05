function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps,
  };
}


function createAnimal(animalType) {
  return function (deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  };
}

var sharkCreator = createAnimal('Shark');

var sharkWithFrickinCannon = sharkCreator('Cannon');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');

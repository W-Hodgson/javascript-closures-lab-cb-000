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

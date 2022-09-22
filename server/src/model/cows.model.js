const cows = [
  {
    tagName: 'HA001',
    color: 'white',
    weight: '233',
    breed: 'burundi',
    gender: 'male',
    commercialPurpose: 'beef',
  },
  {
    tagName: 'HA002',
    color: 'black',
    weight: '555',
    breed: 'gulali',
    gender: 'female',
    commercialPurpose: 'milk',
  },
];

function addCows(cow) {
  cows.push(cow);
}

console.log(cows);
module.exports = {
  cows,
  addCows,
};

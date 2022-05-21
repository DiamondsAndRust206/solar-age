import PlanetaryAge from '../src/js/planetary-age.js';

describe('PlanetaryAge', () => {
  let newAge;

  test('should receive age and expectancy to add value to age and expectancy properties', () => {
    newAge = new PlanetaryAge(50, 77);
    expect(newAge.age).toEqual(50, 77);
  });

  test('should return age on mercury rounded to a whole number', () => {
    newAge = new PlanetaryAge(50);
    let newMercuryAge = newAge.mercuryAge();
    expect(newMercuryAge).toEqual(208);
  });

  test('should return age on venus rounded to a whole number', () => {
    newAge = new PlanetaryAge(50);
    let newVenusAge = newAge.venusAge();
    expect(newVenusAge).toEqual(80);
  });  
});

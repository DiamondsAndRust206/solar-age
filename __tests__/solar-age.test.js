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
    expect(newVenusAge).toEqual(81);
  });  

  test('should return age on mars rounded to a whole number', () => {
    newAge = new PlanetaryAge(50);
    let newMarsAge = newAge.marsAge();
    expect(newMarsAge).toEqual(27);
  });

  test('should return age on jupiter rounded to a whole number', () => {
    newAge = new PlanetaryAge(50);
    let newJupiterAge = newAge.jupiterAge();
    expect(newJupiterAge).toEqual(4);
  });

  test('should determine life left on mercury by subtracting age from exspectancy', () => {
    newAge = new PlanetaryAge(50, 77);
    let lifeLeft = newAge.mercLifeExpect();
    expect(lifeLeft).toEqual(27);
  });

  test('should give the absolute value of age minus expectancy when age is the larger number', () => {
    newAge = new PlanetaryAge(85, 77);
    let lifeLeft = newAge.mercLifeExpect();
    expect(lifeLeft).toEqual(8);
  });

  test('should determine life left on venus by subtracting age from exspectancy', () => {
    newAge = new PlanetaryAge(30);
    let newVenusAge = newAge.venusAge();
    newAge = new PlanetaryAge(newVenusAge, 77);
    let lifeLeft = newAge.venusLifeExpect();
    expect(lifeLeft).toEqual(29);
  });

  test("should give venus's absolute value of age minus expectancy when age is the larger number", () => {
    newAge = new PlanetaryAge(50);
    let newVenusAge = newAge.venusAge();
    newAge = new PlanetaryAge(newVenusAge, 77);
    let lifeLeft = newAge.venusLifeExpect();
    expect(lifeLeft).toEqual(4);
  });

  test('should determine life left on mars by subtracting age from exspectancy', () => {
    newAge = new PlanetaryAge(40);
    let newMarsAge = newAge.marsAge();
    newAge = new PlanetaryAge(newMarsAge, 77);
    let lifeLeft = newAge.marsLifeExpect();
    expect(lifeLeft).toEqual(56);
  });

});

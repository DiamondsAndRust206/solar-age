import PlanetaryAge from '../src/js/planetary-age.js';

describe('PlanetaryAge', () => {
  let newAge;

  beforeEach(() => {
    newAge = new PlanetaryAge(50, 77);
  });

  test('should receive age and expectancy to add value to age and expectancy properties', () => {
    expect(newAge.age).toEqual(50, 77);
  });

  test('should return age on mercury rounded to a whole number', () => {
    newAge.mercuryAge(50);
    expect(newAge.mercuryAge).toEqual(208);
  });
});

import PlanetaryAge from '../src/js/planetary-age.js';

describe('PlanetaryAge', () => {
  let newAge;

  test('should receive age and expectancy to add value to age and expectancy properties', () => {
    newAge = new PlanetaryAge(50, 77);
    expect(newAge.age).toEqual(50, 77);
  });
});

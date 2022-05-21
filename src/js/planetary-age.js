export default class PlanetaryAge {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }
  
  mercuryAge() {
    let newMercuryAge = Math.round(this.age / .24);
    return newMercuryAge;
  }

  venusAge() {
    let newVenusAge = Math.round(this.age / .62);
    return newVenusAge;
  }

  marsAge() {

  }

  jupiterAge() {

  }
}
export default class PlanetaryAge {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }
  
  mercuryAge() {
    let newMercuryAge = Math.round(this.age / .24);
    return newMercuryAge;
  }

  mercLifeExpect() {
    let mercLifeLeft = (this.expectancy - this.age);
    if(mercLifeLeft < 0) {
      let longLife = Math.abs(mercLifeLeft);
      return longLife;
    }
    return mercLifeLeft;
  }

  venusAge() {
    let newVenusAge = Math.round(this.age / .62);
    return newVenusAge;
  }

  venusLifeExpect() {
    // let newAge = new PlanetaryAge(50, 77);
    // let newVenusAge = newAge.venusAge();
    // let yearsLeft = (this.expectancy - newVenusAge);
    // return yearsLeft;
  }

  marsAge() {
    let newMarsAge = Math.round(this.age / 1.88);
    return newMarsAge;
  }

  jupiterAge() {
    let newJupiterAge = Math.round(this.age / 11.86);
    return newJupiterAge;
  }


}
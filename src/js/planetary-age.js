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
    let venusLifeLeft = (this.expectancy - this.age);
    if(venusLifeLeft < 0) {
      let venusLifeLeftAbs = Math.abs(venusLifeLeft);
      return venusLifeLeftAbs;
    }
    return venusLifeLeft;
  }

  marsAge() {
    let newMarsAge = Math.round(this.age / 1.88);
    return newMarsAge;
  }

  marsLifeExpect() {
    let marsLifeLeft = (this.expectancy - this.age);
    if(marsLifeLeft < 0) {
      let marsLifeLeftAbs = Math.abs(marsLifeLeft);
      return marsLifeLeftAbs;
    }
    return marsLifeLeft;
  }

  jupiterAge() {
    let newJupiterAge = Math.round(this.age / 11.86);
    return newJupiterAge;
  }

  jupiterLifeExpect() {
    
  }


}
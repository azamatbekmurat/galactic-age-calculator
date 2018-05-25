export class AgeCalculator {
  constructor(age){
    this.age = age;
  }

  yearsToSec(years) {
    let seconds = years*365*24*60*60;
    return seconds;
  }

  //Date format is "MM/DD/YYYY";
  dateToSec(date) {
    let seconds = new Date(date).getTime()/1000;
    return seconds;
  }

  difference(date1, date2) {
    let second1 = this.dateToSec(date1);
    let second2 = this.dateToSec(date2);
    return Math.abs(second1-second2);
  }

  humanYearToMerc(years) {
    let mercYear = this.roundToTwo(years/0.24);
    return mercYear;
  }

  humanYearToVenus(years) {
    let venusYear = this.roundToTwo(years/0.62);
    return venusYear;
  }

  humanYearToMars(years) {
    let marsYear = this.roundToTwo(years/1.88);
    return marsYear;
  }

  humanYearToJupiter(years) {
    let jupiterYear = this.roundToTwo(years/11.86);
    return jupiterYear;
  }

  lifeExpactancy(planet) {
    let planetInput = planet.toLowerCase();
    let EarthLifeExpactancy = 80;
    let planetLifeExpactancy;

    if (planetInput == "earth") {
      planetLifeExpactancy = 80;
    } else if (planetInput == "mercury") {
      planetLifeExpactancy = this.humanYearToMerc(EarthLifeExpactancy);
    } else if (planetInput == "venus") {
      planetLifeExpactancy = this.humanYearToVenus(EarthLifeExpactancy);
    } else if (planetInput == "mars") {
      planetLifeExpactancy = this.humanYearToMars(EarthLifeExpactancy);
    } else if (planetInput == "jupiter") {
      planetLifeExpactancy = this.humanYearToJupiter(EarthLifeExpactancy);
    }
    return planetLifeExpactancy;
  }

  earthYearsToPlanet(EarthYears, planet) {
    let planetInput = planet.toLowerCase();
    let planetYears = 0;

    if (planetInput == "earth") {
      planetYears = EarthYears;
    } else if (planetInput == "mercury") {
      planetYears = this.humanYearToMerc(EarthYears);
    } else if (planetInput == "venus") {
      planetYears = this.humanYearToVenus(EarthYears);
    } else if (planetInput == "mars") {
      planetYears = this.humanYearToMars(EarthYears);
    } else if (planetInput == "jupiter") {
      planetYears = this.humanYearToJupiter(EarthYears);
    }

    return planetYears;
  }

  yearAfterLifeExpactancy(livingEarthYears, planet) {
    let planetInput = planet.toLowerCase();
    let averageLifeExpactancyYears = this.lifeExpactancy(planetInput);
    let actualPlanetAge = this.earthYearsToPlanet(livingEarthYears, planetInput);
    let afterLifeExpactancy;

    if (actualPlanetAge > averageLifeExpactancyYears) {
      afterLifeExpactancy = this.roundToTwo(Math.abs(actualPlanetAge - averageLifeExpactancyYears));
    }
    return afterLifeExpactancy;
  }

  roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
  }

}

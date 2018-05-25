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

  roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
  }

}

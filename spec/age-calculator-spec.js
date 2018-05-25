import {AgeCalculator} from './../src/age-calculator.js';

describe ('age-calculator', function() {
  it ('should test whether converts years to seconds', function() {
    var newAge = new AgeCalculator();
    console.log(newAge);
    expect(newAge.yearsToSec(29)).toEqual(914544000);
    console.log("years to sec: " + newAge.yearsToSec(29));
  });

  it ('should test whether converts date to seconds', function() {
    var newAge = new AgeCalculator();
    expect(newAge.dateToSec("05/23/2018")).toEqual(1527058800);
    console.log("date to sec: " + newAge.dateToSec("05/23/2018"));
  });

  it ('should test difference in seconds between two dates', function() {
    var newAge = new AgeCalculator();
    expect(newAge.difference("05/23/2018", "05/24/2018")).toEqual(86400);
    console.log("difference in seconds: " + newAge.difference("05/23/2018", "05/24/2018"));
  });

  it ('should test the converstion of Earth year to Mercury year', function() {
    var newAge = new AgeCalculator();
    expect(newAge.humanYearToMerc(12)).toEqual(50);
    console.log("Mercury year is: " + newAge.humanYearToMerc(12));
  });

  it ('should test the converstion of Earth year to Venus year', function() {
    var newAge = new AgeCalculator();
    expect(newAge.humanYearToVenus(12)).toEqual(19.35);
    console.log("Venus year is: " + newAge.humanYearToVenus(12));
  });

  it ('should test the converstion of Earth year to Mars year', function() {
    var newAge = new AgeCalculator();
    expect(newAge.humanYearToMars(12)).toEqual(6.38);
    console.log("Mars year is: " + newAge.humanYearToMars(12));
  });

  it ('should test the converstion of Earth year to Jupiter year', function() {
    var newAge = new AgeCalculator();
    expect(newAge.humanYearToJupiter(12)).toEqual(1.01);
    console.log("Jupiter year is: " + newAge.humanYearToJupiter(12));
  });


});

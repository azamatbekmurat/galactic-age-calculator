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
  });

  it ('should test the converstion of Earth year to Mercury year', function() {
    var newAge = new AgeCalculator();
    expect(newAge.humanYearToMerc(12)).toEqual(50);
  });

  it ('should test the converstion of Earth year to Venus year', function() {
    var newAge = new AgeCalculator();
    expect(newAge.humanYearToVenus(12)).toEqual(19.35);
  });

  it ('should test the converstion of Earth year to Mars year', function() {
    var newAge = new AgeCalculator();
    expect(newAge.humanYearToMars(12)).toEqual(6.38);
  });

  it ('should test the converstion of Earth year to Jupiter year', function() {
    var newAge = new AgeCalculator();
    expect(newAge.humanYearToJupiter(12)).toEqual(1.01);
  });

  it ('should test the life expactancy of each planet when life expactancy on Earth is 80', function() {
    var newAge = new AgeCalculator();
    expect(newAge.lifeExpactancy("Earth")).toEqual(80);
    expect(newAge.lifeExpactancy("Mercury")).toEqual(333.33);
    expect(newAge.lifeExpactancy("Venus")).toEqual(129.03);
    expect(newAge.lifeExpactancy("MARS")).toEqual(42.55);
    expect(newAge.lifeExpactancy("juPITER")).toEqual(6.75);
  });

  it ('should test the converstion of Earth years to particular planet', function() {
    var newAge = new AgeCalculator();
    expect(newAge.earthYearsToPlanet(30, "Earth")).toEqual(30);
    expect(newAge.earthYearsToPlanet(30, "Mercury")).toEqual(125);
    expect(newAge.earthYearsToPlanet(30, "Jupiter")).toEqual(2.53);
  });


  it ('should test how many years have been passed on each particular planet after life expactancy', function() {
    var newAge = new AgeCalculator();
    expect(newAge.yearAfterLifeExpactancy(78, "mercury")).not.toEqual(2);
    expect(newAge.yearAfterLifeExpactancy(82, "Earth")).toEqual(2);
    expect(newAge.yearAfterLifeExpactancy(82, "Mercury")).toEqual(8.34);
    expect(newAge.yearAfterLifeExpactancy(82, "Venus")).toEqual(3.23);
    expect(newAge.yearAfterLifeExpactancy(82, "Mars")).toEqual(1.07);
    expect(newAge.yearAfterLifeExpactancy(82, "Jupiter")).toEqual(0.16);
  });


});

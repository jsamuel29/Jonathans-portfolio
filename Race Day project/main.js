let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 25;
if(registeredEarly && age > 18) {
  raceNumber += 1000;
}

if(registeredEarly && age > 18) {
  console.log(`Racers over the age of 18 will race at 9:30 am, your race number is: ${raceNumber}.`)
} else if (!registeredEarly && age > 18 ) {
  console.log(`Races who did not register early will race at 11:00 am, your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Youth runnners will race at 12:30 pm, your race number is: ${raceNumber}.`)
} else {
  console.log('Please go to registration desk.')
}


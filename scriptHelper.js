// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if(input === "") {
    return "Empty"
} else if (isNaN(input)){
    return "Not a Number";
} else {
    return "Is a number";
}
   }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    var pilotValidation = validateInput(pilot);
    var coPilotValidation = validateInput(coPilot);
    var fuelLevelValidation = validateInput(fuelLevel);
    var cargoMassValidation = validateInput(cargoMass);
  
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

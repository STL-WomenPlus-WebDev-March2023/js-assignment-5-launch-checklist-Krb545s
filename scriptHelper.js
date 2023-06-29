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
}  if (isNaN(input)){
    return "Not a Number";
} if {
    return "Is a number";
}
if(
    pilotName === '' ||
    copilotName === '' ||
    fuelLevel === '' ||
    cargoMass === '' ||
) {
    alert('All fields are required!');
    return;
}
   } else if (
    pilotName === !/^[A-Za-z]+$/ || copilotName !/^[A-Za-z]+$/) {
        alert('Invalid input. Pilot and co-pilot must be valid names');
        return;
    } else if(isNan(fuelLevel) || isNan(cargoMass)){
        alert('Invalid input! Fuel level and cargo mass should be numbers');
    } else 
   { return "Valid";   }

   }


   function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    var pilotValidation = validateInput(pilot);
    var coPilotValidation = validateInput(coPilot);
    var fuelLevelValidation = validateInput(fuelLevel);
    var cargoMassValidation = validateInput(cargoMass);
  
    document.getElementById('pilotStatus').innerHTML = 'Pilot ${pilot} is ready';
    document.getElementById(copilotStatus).innerHTML = 'Copilot ${coPilot} is ready';

    if (pilotValidation === "Empty" || coPilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoMassValidation === "Empty") {
        // Display an error message if any field is empty
        alert("All fields are required!");
      } else if (fuelLevelValidation === "Not a Number" || cargoMassValidation === "Not a Number") {
        // Display an error message if any field is not a number
        alert("Fuel level and cargo mass must be valid numbers!");
      } else {
        document.getElementById("faultyItems").style.visibility = "hidden";
        if(fuelLevel < 1000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";    
        } if (cargoMass > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too large for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        }   if (fuelLevel >= 10000 && cargoMass <= 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            document.getElementById("launchStatus").style.color = "green";
          }
        }

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

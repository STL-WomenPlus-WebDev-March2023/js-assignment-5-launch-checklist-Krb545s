// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector('form')
   form.addEventListener('submit', function(evenet) {
    event.preventuDefault();
    let pilotName = pilotNameInput.value;
    let copilotName = copilotNameInput.value;
    let fuelLevel = fuelLevelInput.value;
    let cargoMass = cargoMassInput.value;

    if(
        pilotName === '' ||
        copilotName === '' ||
        fuelLevel === '' ||
        cargoMass === '' ||
    ) {
        alert('All fields are required!');
        return;
    } if(
        pilotName === '' ||
        copilotName === '' ||
        fuelLevel === '' ||
        cargoMass === '' ||
       ){
        alert('All fields are required!');
       } else if (
        pilotName === !/^[A-Za-z]+$/ || copilotName !/^[A-Za-z]+$/) {
            alert('Invalid input. Pilot and co-pilot must be valid names');
            return;
        } else if(isNan(fuelLevel) || isNan(cargoMass)){
            alert('Invalid input! Fuel level and cargo mass should be numbers');
        } 
        return "Valid";   
   })
   
   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});
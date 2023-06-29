// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector('form')
   form.addEventListener('submit', function(evenet) {
    event.preventuDefault();
    let pilotName = document.querySelector("input[name='pilotName']").value;
    let coPilotName = document.querySelector("input[name='copilotName']").value;
    let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
    let cargoMass = document.querySelector("input[name='cargoMass']").value;
    formSubmission(document, pilotName, coPilotName, fuelLevel, cargoMass);
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
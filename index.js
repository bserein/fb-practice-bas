// import our restaurants
const restaurants = require('./restaurants.json');// doing ./ will load out the json file thats in the same folder

//import a set of tools to talk to firebase and firestore
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app'); // get this from the firebase documentation
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//console.log(restaurants[0].name) // do this just to check to see if it worked
//connect to firestore
//connect private key and place in .gitignore to make sure it doesnt show up in the public repository
const credentials = require('./credentials.json')
// create a collection caled "restaurants"

// add each restaurant
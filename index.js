// import our restaurants
const restaurants = require('./restaurants.json');// doing ./ will load out the json file thats in the same folder

//import a set of tools to talk to firebase and firestore
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app'); // get this from the firebase documentation
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//console.log(restaurants[0].name) // do this just to check to see if it worked

//connect private key and place in .gitignore to make sure it doesnt show up in the public repository
// import our credentials 
const credentials = require('./credentials.json');

// connect to firebase services
initializeApp({
    credential: cert (credentials)
});

//connect to firestore
const db = getFirestore();

// create a collection caled "restaurants"
const restRef = db.collection('restaurants') // shortcut to not have to type a lot

// add each restaurant
// db.collection('restaurants').add(restaurants[3]) // this will go to the data base creating a document of the restaurant
// .then(doc => {
//     console.log('Added restaurant', doc.id)//this will create a unique ID like in mongo
// })
// .catch(err => {
//     console.error(err); // this will tell us what the error is if one shows up
// });


// how to read one document
// db.collection('restaurants').doc('JM1XdWEc8EklqcLtlqV0').get()
// .then(doc => {
//     console.log(doc.id, ' => ', doc.data()); //.data returns data from a document 
// })
// .catch(err => console.error(err));

// get all documents
// db.collection('restaurants').get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         console.log(doc.id, ' => ', doc.data())
//     })
// })
// .catch(console.error)

// find a document(s) also known as querying a collection
restRef.where('name', '==', 'Boley').get() // you filter then you get it
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(console.error);

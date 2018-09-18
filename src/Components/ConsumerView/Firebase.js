import * as firebase from 'firebase';

var config = {
    apiKey: "YOUR API KEY",
    authDomain: "hackthenorthvideoreview.firebaseapp.com",
    databaseURL: "https://hackthenorthvideoreview.firebaseio.com",
    projectId: "hackthenorthvideoreview",
    storageBucket: "hackthenorthvideoreview.appspot.com",
    messagingSenderId: "368052506375"
};

firebase.initializeApp(config);

export default firebase;

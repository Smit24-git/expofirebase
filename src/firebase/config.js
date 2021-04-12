import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCgkRLWk6nisGT9if3Ppqe9JeSqYyEG2M8",
    authDomain: "fir-todo-4f614.firebaseapp.com",
    databaseURL: "https://fir-todo-4f614-default-rtdb.firebaseio.com",
    projectId: "fir-todo-4f614",
    storageBucket: "fir-todo-4f614.appspot.com",
    messagingSenderId: "419286696168",
    appId: "1:419286696168:web:f025c4896542e62b16895d",
    measurementId: "G-0GJ5G4R093"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };
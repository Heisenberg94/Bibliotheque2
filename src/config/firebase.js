import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBqQUWd4pX4uZUEe-Zo5DjLfh_IbDQ5K1M",
    authDomain: "blog-react-45b08.firebaseapp.com",
    databaseURL: "https://blog-react-45b08-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blog-react-45b08",
    storageBucket: "blog-react-45b08.appspot.com",
    messagingSenderId: "361135367731",
    appId: "1:361135367731:web:a2cb41083bc6cc08f56546"
};
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
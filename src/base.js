import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBUAgJES9epSe9ikF8yIRO-igNnEFol-oA',
  authDomain: 'cath-of-the-day-oliviel-valdez.firebaseapp.com',
  databaseURL: 'https://cath-of-the-day-oliviel-valdez.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;

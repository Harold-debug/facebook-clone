import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDK8c6ynUkqg4ewm_YwuqSNM8Mv5vHgm1k",
  authDomain: "facebook-clone-6b9d5.firebaseapp.com",
  projectId: "facebook-clone-6b9d5",
  storageBucket: "facebook-clone-6b9d5.appspot.com",
  messagingSenderId: "748732208356",
  appId: "1:748732208356:web:4334bdc648ee77eab888f1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

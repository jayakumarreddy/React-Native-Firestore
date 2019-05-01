import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDBQLObqo--jWeZCFOGIvaSDw9lpJyt5y4",
  authDomain: "samplereactnativeapp-c66e5.firebaseapp.com",
  databaseURL: "https://samplereactnativeapp-c66e5.firebaseio.com",
  projectId: "samplereactnativeapp-c66e5",
  storageBucket: "samplereactnativeapp-c66e5.appspot.com",
  messagingSenderId: "998030875059"
};

firebase.initializeApp(config);

export default firebase;

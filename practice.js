
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyBU1HDTV2zwDqQJEafdw6HYkP90SMLNDJo",
  authDomain: "kwitter-c0a24.firebaseapp.com",
  databaseURL: "https://kwitter-c0a24-default-rtdb.firebaseio.com",
  projectId: "kwitter-c0a24",
  storageBucket: "kwitter-c0a24.appspot.com",
  messagingSenderId: "850844850546",
  appId: "1:850844850546:web:6d1ea5050e183e177165eb"
};
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}



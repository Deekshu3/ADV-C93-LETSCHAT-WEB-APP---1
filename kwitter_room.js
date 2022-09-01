const firebaseConfig = {
      apiKey: "AIzaSyBYtB4F2XlaaG3rq6-Xh8d1yoUlkgEydtw",
      authDomain: "let-chat-web-app-afbee.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-afbee-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-afbee",
      storageBucket: "let-chat-web-app-afbee.appspot.com",
      messagingSenderId: "536938425397",
      appId: "1:536938425397:web:3f3125a2075670e32c957c"
    };
  
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

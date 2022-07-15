var firebaseConfig = {
      apiKey: "AIzaSyBxIMPkphg-4mTzScB2BtJglkILPHfYdBg",
      authDomain: "kwitter-9b9d8.firebaseapp.com",
      databaseURL: "https://kwitter-9b9d8-default-rtdb.firebaseio.com",
      projectId: "kwitter-9b9d8",
      storageBucket: "kwitter-9b9d8.appspot.com",
      messagingSenderId: "269724505163",
      appId: "1:269724505163:web:b0d2b5d65d9143329429ce"
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

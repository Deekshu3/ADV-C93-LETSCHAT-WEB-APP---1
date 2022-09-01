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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;

function addRoom(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name : "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location ="kwitter_page.html";
}
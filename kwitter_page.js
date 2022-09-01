const firebaseConfig = {
      apiKey: "AIzaSyBYtB4F2XlaaG3rq6-Xh8d1yoUlkgEydtw",
      authDomain: "let-chat-web-app-afbee.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-afbee-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-afbee",
      storageBucket: "let-chat-web-app-afbee.appspot.com",
      messagingSenderId: "536938425397",
      appId: "1:536938425397:web:3f3125a2075670e32c957c"
    };
  
 firebase.initializeApp(firebaseConfig);
 
 user_name = localStorage.getItem("user_name"); 
 room_name = localStorage.getItem("room_name");
 function Send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({ 
            name:user_name, 
            message:msg, 
            like:0 
      }); 
      document.getElementById("msg").value = ""; 
}


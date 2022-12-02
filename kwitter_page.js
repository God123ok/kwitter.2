//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output")
      firebase_message_id = childKey;
      message_data = childData;

      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_trick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h>";
      like_button ="<buton class='btn btn-warning' id="+firebase_message_id+" value='+like+" onclick='updateLike(this.i)'>";
      span_with_tag = "<span class='glyphicon glyphiconn-thumbs-up'>Like:"+"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;

      } });  }); }
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
     
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name"):
       window.Location = "kwitter.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like0

      });
      
      document.getElementById("msg").value = "";

}

firbase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
}):
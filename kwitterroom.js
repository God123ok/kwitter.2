function addRoom()
{
    room_name = document.getElementById("room_name").ariaValueMax;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})}
room_name = childKey;

});});}
getData();

function getData() {firebase.data}
       Room_names = childKey;

});});}
getData();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML}}
Room_names = childKey;

console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

getData();

function redirectToRoomName(name)
{
    console.log(name);
    locationStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}


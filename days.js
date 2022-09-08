//first day of the month
const firstDate = new Date();
firstDate.setDate(1);
const firstDay = firstDate.getDay();

//rgb variables
let r = 0;
let g = 0;
let b = 0;


function displayCalendar(uid){
  //setting name
  const name = uid;
  console.log(name);

  //setting date formate
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();
  date = (mm + '-' + dd + '-' + yyyy);

  //rgb variables
  let r = 0;
  let g = 0;
  let b = 0;
  
  console.log(r + ' + ' + g + ' + ' + b);
  //calendar setting up already current colors
for(let i = 1; i < 32; i++){
  const x = (mm + '-' + '0' + i + '-' + yyyy);
  //red value
  const dbRef = firebase.database().ref();
  dbRef.child('user').child(name).child(x).child('red').get().then((snapshot) => {
    if (snapshot.exists()) {
      r = snapshot.val();
  
    } else {
    }
  }).catch((error) => {
    console.error(error);
  });

  //green value
  dbRef.child('user').child(name).child(x).child('green').get().then((snapshot) => {
    if (snapshot.exists()) {
      g = snapshot.val();
  
    } else {
    }
    }).catch((error) => {
      console.error(error);
    });

  //blue value
  dbRef.child('user').child(name).child(x).child('blue').get().then((snapshot) => {
    if (snapshot.exists()) {
      b = snapshot.val();
      //change square color
      document.getElementById("square" + (i+firstDay)).setAttribute("fill", rgbToHex(r, g, b));
    } else {
    }
    }).catch((error) => {
      console.error(error);
    });
}



}


//changing current day color when submit new color
function retrieveDatabase(date, r, g, b){
  //getting red
  var redRef = firebase.database().ref('user/' + name + '/' + (date) + '/red');
  redRef.on('value', (snapshot) => {
  r = snapshot.val();
  });
  //getting green
  var greenRef = firebase.database().ref('user/' + name + '/' + (date) + '/green');
  greenRef.on('value', (snapshot) => {
    g = snapshot.val();
  });
  //getting blue
  var blueRef = firebase.database().ref('user/' + name + '/' + (date) + '/blue');
  blueRef.on('value', (snapshot) => {
    b = snapshot.val();
  });

  const d = new Date();
  const currentDay = d.getDate() + firstDay;
  //changing color
  document.getElementById("square" + (currentDay)).setAttribute("fill", rgbToHex(r, g, b));

}

//functions for changing 
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}











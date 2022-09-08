let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
colorInput.addEventListener('input', () => {
  let color = colorInput.value;
  hexInput.value = color;
  // document.body.style.backgroundColor = color;
  document.querySelector('h1').style.color = color;
});

function sendDatabase() {
  // Your web app's Firebase configuration

  let name = getUID();

  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();

  date = (mm + '-' + dd + '-' + yyyy);

  let red = {};
  let green = {};
  let blue = {};

  //setting values to firebase

  red = hexToRgb(hex.value).r;
  green = hexToRgb(hex.value).g;
  blue = hexToRgb(hex.value).b;

  firebase.database().ref('user/' + name + '/' + (date)).set({
    red: red,
    green: green,
    blue: blue
  });
  
  retrieveDatabase(date, red, green, blue); 

}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}



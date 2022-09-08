
//setting and initializing Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBCC2nCauqInCh7KiA3iJLDGJ_rzGBu8LU",
    authDomain: "neopixels-4041e.firebaseapp.com",
    databaseURL: "https://neopixels-4041e-default-rtdb.firebaseio.com",
    projectId: "neopixels-4041e",
    storageBucket: "neopixels-4041e.appspot.com",
    messagingSenderId: "113174201529",
    appId: "1:113174201529:web:83dc22b01f8e2fad924768",
    measurementId: "G-0MEBYM23M1"
  };
  firebase.initializeApp(firebaseConfig);

  
const auth = firebase.auth();
let uid = 0;
//listen for auth status changes
auth.onAuthStateChanged(user => {
    if(user){
        uid = user.uid;
        displayCalendar(uid);
        console.log('user logged in: ', user);
        
    }
    else{
        console.log('user logged out');

        location.href = 'index.html';
    }

})
;

function getUID(){
    auth.onAuthStateChanged(user => {
        let uid = 0;
        if(user){
            uid = user.uid;
            return uid;  
        }
        else{
        }
    })
    ;
    return uid;
}










// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  })
});


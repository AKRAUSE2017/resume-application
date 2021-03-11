var user;
var isSignedIn;

function signIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        var name = user.displayName;
        document.getElementById("signIn").style.display = "none";
        document.getElementById("profile").innerHTML = name;
        document.getElementById("profile").style.display = "block";
      }
   });
}

/*function goToProfile(user){
  console.log("here");
  window.location.href = "profile.html"
  var name = user.name;
  document.getElementById("username").innerHTML = name;
}*/
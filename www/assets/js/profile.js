firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("profile").innerHTML = user.displayName;
        document.getElementById("profile").style.display = "block";
        document.getElementById("username").innerHTML = user.displayName;
    }else{
        console.log("error: no user found");
    }
});

function signOut(){
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
      }).catch((error) => {
        // An error happened.
      });
}


$(document).ready(function() {
  // Register the callback to be fired every time auth state changes
  var ref = new Firebase("https://prophet411.firebaseio.com");
  //ref.onAuth(authDataCallback);

  $("#log-in").click(function() {
    var email = $("#email").val();
    var pw = $("#password").val();

    ref.authWithPassword({
      email    : email,
      password : pw
    }, authHandler);
  });
});

// Create a callback which logs the current auth state
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}

// Create a callback to handle the result of the authentication
function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
    $("#error-login").text("Username/password combination not found!");
  } else {
    console.log("Authenticated successfully with payload:", authData);
    window.location.href = "events.html";
  }
}

/*
// Or via popular OAuth providers ("facebook", "github", "google", or "twitter")
ref.authWithOAuthPopup("<provider>", authHandler);
ref.authWithOAuthRedirect("<provider>", authHandler);
*/

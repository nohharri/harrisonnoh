$(document).ready(function() {
  var ref = new Firebase("https://prophet411.firebaseio.com/user");
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    $(".event-price").html("$" + snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  $("#check-history").click(function() {
  	$("#history").css({ display: 'initial' });
  });
});

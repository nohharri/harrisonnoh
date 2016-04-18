$(document).ready(function() {
  // Get a database reference to our posts
  var ref = new Firebase("https://prophet411.firebaseio.com/events");
  ref.orderByChild("height").on("child_added", function(snapshot) {
    var template = $('<div class="element"><div class="title"><h1 class="event-title">' + snapshot.val().title + '</h1><div class="event-img-container"><img class="event-img" src="' + snapshot.val().imgurl +'"></div><div class="event-price">$' + snapshot.val().curr_price +'</div></div></div><div class="line"></div>');
    template.click(function() {
      window.location.href = "event.html?key=" + snapshot.key();
    });
    $("#events").append(template);
    console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
  });
});

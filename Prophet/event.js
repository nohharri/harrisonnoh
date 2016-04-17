$(document).ready(function() {
  var url = window.location.href;
  url = url.split("=").pop();
  var ref = new Firebase("https://prophet411.firebaseio.com/events/" + url);
  var ref2 = new Firebase("https://prophet411.firebaseio.com/");
  var price;
  var key;
  var user_money;
  ref2.on("value", function(snapshot) {
    user_money = parseFloat(snapshot.val().user);
  });
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    key = snapshot.key();
    price = snapshot.val().curr_price;
    $(".event-img-container").append('<img class="event-img" src="' + snapshot.val().imgurl +'">');
    $("#event-data").append('<div style="text-align: center"><h1 class="event-title">'+snapshot.val().title+'</h1></div>');
    $("#event-data").append('<div style="font-size: 80px; text-align: center" class="event-price">$'+ snapshot.val().curr_price +'</div>');
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  $("#buy").click(function() {
    var shares = prompt("How many shares would you like to buy?", 1);
    console.log(shares);
    var user_pays = 0;
    for(var i = 0; i < shares; i++) {
      console.log("printing" + price);
      price = parseFloat(price) + 0.015;
      user_pays += price;
    }
    price = price.toFixed(2);
    new Firebase("https://prophet411.firebaseio.com/events/" + key).update({
       curr_price: price
    });
    user_pays = user_money - user_pays;
    user_pays = user_pays.toFixed(2);
    ref2.update({user: user_pays});

    window.location.href = "event.html?key=" + key;
  });

  $("#sell").click(function() {
    var shares = prompt("How many shares would you like to sell?", 1);
    var user_sells = 0;
    for(var i = 0; i < shares; i++) {
      price = parseFloat(price) - 0.015;
      user_sells -= price;
    }
    price = price.toFixed(2);
    new Firebase("https://prophet411.firebaseio.com/events/" + key).update({
       curr_price: price
    });
    user_sells = user_money + user_sells;
    user_sells = user_sells.toFixed(2);
    ref2.update({user: user_sells});
    window.location.href = "event.html?key=" + key;
  });
});

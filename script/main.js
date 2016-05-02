$(document).ready(function() {

	/*
	count = 0;
	string = [
		"Hi, my name is Harrison Noh.",
		"I am a coder and a designer.",
		"I currently attend the University of Michigan.",
		"I am looking for fulltime Opportunities in Software Development.",
		"I enjoy combining cool UIs with  programming.",
		"That's how I made this nifty animation loop."
	];
	textJump("#text-jump", string[count]);
	triangles();

	function textJump(id, string) {
		var milliseconds = 60;
		for(var i = 0; i < string.length; i++)
			(function(i) {
			setTimeout(function() {
				addCharacter(id, string[i]);

				if(i == string.length - 1) {
					textLoop(".character");
				}
			}, milliseconds);
			milliseconds += 60; })(i);
	}

	function textLoop(id) {
		setTimeout(function() {
			$(id).css("background-color",  "#adcaf4");
			setTimeout(function() {
				$(".character").css("background-color", "transparent");
				$(".character").text("");
				$(".character-cool").text("");
				count++;
				if(count < string.length) {
					setTimeout(function() {
						textJump("#text-jump", string[count]);
					}, 1000);
				}
				else {
					setTimeout(function() {
						count = 0;
						textJump("#text-jump", string[count]);					
					}, 1000);
				}
			}, 1000);
		}, 1000);
	}

	function addCharacter(id, character) {
		if(character == ' ') {
			$(id + "2").append("<div class='character-cool'>&nbsp</div>");
			$(id).append("<div class='character'>&nbsp</div>");
			return;
		}
		$(id + "2").append("<div class='character-cool'>" + character + "</div>");
		$(id).append("<div class='character'>" + character + "</div>");
	}

	function triangles() {
		setInterval(spawnTriangle, 500);
	}

	function spawnTriangle() {
		var triangle = $("<div class='triangle'></div>");
		var rand = Math.floor((Math.random() * 2) + 0);
		if(rand == 0) {
			triangle = $("<div class='triangle2'></div>");
		}
		triangle.css( {
			top: Math.random() * ($("#cover").height() - 0) + 'px'
		});

		triangle.animate({
			left: $(window).width()
		}, $(window).width() * 5, function() {
			triangle.remove();
		});
		$("#cover").append(triangle);
	}
	*/
	var top = $('.categories-container').offset().top - 60 + 40;

	//$('.categories-container').height($('.story-container').height());

	(function categoriesScroll() {
		$(window).scroll(adjust);
		$(window).resize(adjust);
	})();

	function adjust() {
			var footerTop = $('#footer').offset().top;
			var scrollTop = $(window).scrollTop();
			if(scrollTop >= top) {
				$('.categories-container').css({
					"position": "fixed",
					"top": "20px"
				});
			}
			else {
				$('.categories-container').css({
					"position": "static",
					"top": "auto"
				});
			}
			if(footerTop <= $('.categories-container').offset().top + $('.categories-container').height()) {
				$('.categories-container').css({position: "absolute", bottom: 0 })
				//conditional that checks when bottom has been reached
			}
		}

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			//user has reached bottom

		}
	});
});
$(document).ready(function() {
    console.log('jakes nightmare js working');
    setTimeout(function() {check()}, 1000);
});

function check() {
    console.log($('#cr-stage').width());
    if($('#cr-stage').width() == 2430) {
        console.log('entered');
        var scale = $('#cr-stage').width() / $(window).width();
        var left_width = $('#cr-stage').width() - $(document).width();
        console.log(scale);
        var scaley = $('#cr-stage').height() / scale;
        console.log(scaley);
        scale = 1 / scale;
        scaley = scaley.toFixed(2);
        scale = scale.toFixed(2);
        $('#cr-stage').css({
            "overflow-y": "hidden",
            "overflow-x": "hidden",
            "transform-origin": "top left",
            "-ms-transform": "scale(" + scale + "," + scale + ")" ,
            "-webkit-transform": "scale(" + scale + "," +  scale + ")",
            "transform": "scale(" + scale + "," + scale + ")"
        });
        $('#cr-container').css({
            "height": scaley + "px"
        });

        //$('#cr-stage').width($(window).width());
    }
    else {
        setTimeout(function() {check()}, 1000);
    }
}

$(window).resize(function() {
        console.log($('#cr-stage').width());
        if($('#cr-stage').width() == 2430) {
            console.log('entered');
            var scale = $('#cr-stage').width() / $(window).width();
            var left_width = $('#cr-stage').width() - $(document).width();
            console.log(scale);
            var scaley = $('#cr-stage').height() / scale;
            console.log(scaley);
            scale = 1 / scale;
            scaley = scaley.toFixed(2);
            scale = scale.toFixed(2);
            $('#cr-stage').css({
                "overflow-y": "hidden",
                "overflow-x": "hidden",
                "transform-origin": "top left",
                "-ms-transform": "scale(" + scale + "," + scale + ")" ,
                "-webkit-transform": "scale(" + scale + "," +  scale + ")",
                "transform": "scale(" + scale + "," + scale + ")"
            });
            $('#cr-container').css({
                "height": scaley + "px"
            });

            //$('#cr-stage').width($(window).width());
        }
        else {
            setTimeout(function() {check()}, 1000);
        }
    });

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
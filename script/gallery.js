$(document).ready(function() {
	console.log("working");
	$.ajax({
	  url: "https://api.behance.net/v2/users/nohharri/projects?client_id=3WvtVmxds0BMmFNBHuQ8SxmrPtHeaYRO",
	  dataType: 'json'
	})
	  .done(function( data ) {
	  	console.log(data);
	    //$( "#results" ).append( html );
	  });
});
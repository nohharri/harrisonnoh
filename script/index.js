$(document).ready(function() {
	console.log('Document ready.');

	$('.box-container').hover(function() {
		const id = $(this).attr('id');
		let newText = ' ';
		switch(id) {
			case 'nike-box':
				newText = 'Internships at 2K Games and Voyomotive >>>';
				break;
			case 'adidas-box':
				newText =  'School and freetime projects >>>';
				break;
			case 'jordan-box':
				newText = "Art stuff >>>";
				break;
			default:
			break;
		}

		var el     = $('.side-title'),  
	    newone = el.clone(true);        
	 	el.before(newone);    
	 	$("." + el.attr("class") + ":last").remove();

		$('#side-title').text(newText);
	}, function() {
		$('#side-title').text(' ');
	});
});
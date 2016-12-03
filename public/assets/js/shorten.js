//Listen for the button click event
$('btn-shorten').on('click', function(){
	$.ajax({
		url: '/api/shorten',
		type: 'POST',
		dataType: 'JSON',
		data: {url: $('#url-field').val()},
		success: function(data){
			var 

		}
	});
});
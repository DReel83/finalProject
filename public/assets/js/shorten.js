//Listen for the button click event
$('#btn-shorten').on('click', function(){
    //e.preventDefault();
    //console.log();

  $.ajax({
    url: '/api/shorten',
    type: 'POST',
    dataType: 'JSON',
    data: {url: $('#url-field').val()},
    success: function(data){
        var resultHTML = '<a class="result" href="' + data.shortUrl + '">'
            + data.shortUrl + '</a>';

        display = $('#link');
        display.html(resultHTML);
        console.log(data);
        $('#link').hide().fadeIn('slow');
    }
  });
return false;
});

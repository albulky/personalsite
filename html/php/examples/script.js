$(document).ready(function(){
	$('#ajax_loader').click(function(){
	 console.log('Start');
	 latency = $('input[name="latency"]').val();
	 $.ajax({
		url: "server.php?latency=" + latency,
		beforeSend: function( xhr ) {
			console.log('before');
			$('#ajax_loader').html('<img src="loading.gif" alt="Loading" height="42" width="42">');
		}
	 })
	 .done(function( data ) {
		 console.log('done');
		 console.dir(data);
		 $('#ajax_loader').text('Время задержки: ' + data.sleep + ' (сек). Click me again!');
      });	
	 console.log('Finish');
    });
	
});

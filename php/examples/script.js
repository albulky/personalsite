$(document).ready(function(){
	$('#ajax_loader').click(function(){
	 console.log('Start');
	 latency = $('input[name="latency"]').val();
	 $.ajax({
		url: "server.php?latency=" + latency,
		beforeSend: function(xhr) {
			console.log('before');
			$('#ajax_loader').html('<img src="loading.gif" alt="Loading" height="42" width="42">');
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("error\njqXHR: " + JSON.stringify(jqXHR) + 
			            "\ntextStatus: " + textStatus +
						"\nerrorThrown: " + errorThrown);
			$('#ajax_loader').html('<p style="color: red; margin: 0; padding: 0;">Ошибка выполнения!!!</p>');
		}
	 })
	 .done(function( data ) {
		 console.log('done');
		 console.dir(data);
		 $('#ajax_loader').html('<p style="color: green; margin: 0; padding: 0;">'+
		                         'Время задержки: ' + data.sleep + ' (сек).' +
								 ' Click me again, '+ data.ru +	'</p>');
      });	
	 console.log('Finish');
    });
	
});

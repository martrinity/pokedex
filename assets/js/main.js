$(document).ready(function() {
	

	var ajaxPoke = function(poke){
		$.ajax({
			url : 'http://pokeapi.co/api/v2/pokemon/', 
			type : 'GET',
			datatype : 'json',
			data : {'limit' : '780'}
		})

		.done(function(response){
			response.results.forEach(function(el){
				$("#elementos").append("<div class='col-lg-3 tarjetas'><img src='https://img.pokemondb.net/sprites/x-y/normal/"+ el.name +".png' alt=‘"+el.name+"'><h5 class='text-uppercase'>"+el.name+"</h5></div>");

		})

		console.log('response');
	
		})

		.fail(function(){
			console.log("error");
		});

		
	}

	ajaxPoke();
	
    /*llamando info para crear modal (no terminado)

    var ajaxId = function(id){
    	$.$.ajax({
    		url: '/path/to/file',
    		type: 'default GET (Other values: POST)',
    		dataType: 'json',
    		data: {param1: 'value1'},
    	})
    	.done(function() {
    		console.log("success");
    	})
    	.fail(function() {
    		console.log("error");
    	})
    	.always(function() {
    		console.log("complete");
    	});
    	

    }*/

	

	
});
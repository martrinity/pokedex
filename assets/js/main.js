$(document).ready(function() {
	/*var dibujarPokes = function(data){
		var poke = "";
		var url = "";
		data.forEach(function(element){
			poke = element.images.downsized_large.url;
			url = element.bitly_gif_url;
		   $("#elementos").append(armarTemplate(poke , url));
		});
	}

	var armarTemplate = function(poke,url){
		var t = "<div class='elemento'><img src='" + poke + "'/><a href='" + url +"'>Ver más</a></div>"
		return t;
	}*/

	var ajaxPoke = function(poke){
		$.ajax({
			url : 'http://pokeapi.co/api/v2/pokemon/', 
			type : 'GET',
			datatype : 'json',
			data : {'limit' : '780'}
		})

		.done(function(response){
			response.results.forEach(function(el){
				$("#elementos").append("<div class='col-lg-3 tarjetas'><img src='https://img.pokemondb.net/sprites/x-y/normal/"+ el.name +".png' alt=‘"+el.name+"'><h5>"+el.name+"</h5></div>");

			})
			console.log('response');
	
		})

		.fail(function(){
			console.log("error");
		});

		
	}

	/*$("#buscar").click(function(event) {
		console.log("Entro");
		var poke = $("#poke-text").val();
		ajaxpoke(poke);
	});*/
	ajaxPoke();
});
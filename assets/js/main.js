$(document).ready(function() {
	var dibujarGifs = function(data){
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
	}

	var ajaxpoke = function(poke){
		$.ajax({
			url : 'http://pokeapi.co/api/v2/pokedex/1/', 
			type : 'GET',
			datatype : 'json',
			data : {
				q : poke,
				
			}
		})
		.done(function(response){
			console.log(response);
			dibujarpokes(response.data);
		})
		.fail(function(){
			console.log("error");
		});
	}

	$("#buscar").click(function(event) {
		console.log("Entro");
		var poke = $("#poke-text").val();
		ajaxpoke(poke);
	});
});
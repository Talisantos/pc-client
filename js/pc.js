function completo(Isla,Categoria,Competicion) {
	
	$.getJSON("https://pcan-ivansantos.rhcloud.com/jornada_actuals.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" +Competicion  + "&callback=?", function(data) {
 	var actual
 	actual = data[0].Jornada;
	
 	$.getJSON("https://pcan-ivansantos.rhcloud.com/calendariocompleto.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" + Competicion + "&callback=?", function(data) {
		var jorn = 0;
		var items = [];
		for (var i=0;i<data.length;i++){
			 var todos = $('.jornada');
			    if (jorn != data[i].Jornada){
					if (actual >= data[i].Jornada ){
						$(".jornada h2").css("color","#900");
					}
				 todos.append("<h2>" + "Jornada "+ data[i].Jornada + "</h2>")
				 jorn = jorn +1;
			 }
			 todos.append("<tr><td>"+  data[i].Lucha  +  "</td><td>"  + data[i].Fecha + "</td><td>" + " "  + data[i].Hora  + "</td><td>" + data[i].Resultado + "</td></tr>")
			 
  		}
	});

});

}








function Actual(Isla,Categoria,Competicion) {
	
	$.getJSON("https://pcan-ivansantos.rhcloud.com/jornada_actuals.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" +Competicion  + "&callback=?", function(data) {
 	var actual
 	actual = data[0].Jornada;
 	$.getJSON("https://pcan-ivansantos.rhcloud.com/calendarios.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" + Competicion + "&&Jornada=" + actual + "&callback=?", function(data) {
  		var items = [];
		var todos = $('.jornada');
		todos.append("<h2>" + "Jornada "+ actual + "</h2>");
		for (var i=0;i<data.length;i++){
    			
			 todos.append("<tr><td>"+  data[i].Lucha  +  "</td><td>"  + data[i].Fecha + "</td><td>" + " "  + data[i].Hora  + "</td><td>" + data[i].Resultado + "</td></tr>")
			 
  		}
	});

});

}



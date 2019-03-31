


$(function(){
  // declaramos esta variable de tipo entero que utilizaremos para el contador
  var contador=0;
  //creamos una variable y almacenamos el siguiente string
  var mensaje2="Ahora estás en el nivel 2";
  //pluging de jquery que permite coger y soltar el elemento al que llamemos
  var mensaje3= "ahora estás en el nivel 3";
   var mensaje4= "ahora estás en el nivel 4";
  var mensajefinal="Has completado el juego";

  /*  PICANTE  -----------*/
	$("#picante").draggable({
    revert: "invalid"
  });
	$("#caja").droppable({
	
		drop: function(event) {
   			
   			$("#picante").css({top:$("#caja").css("top"),left:$("#caja").css("left")});
   			contador++;//entra en funcion correcta y sumamos el contador a mas uno
   			if(contador==3) alert(mensaje3), $("#caja5").show(2000); ;
   			//comprobamos si ha acertado las 5 cajas para mostrar que has ganado

  		},
      accept: "#picante",
  		tolerance: "touch"
	});


  /*  DULCE  -----------*/
  $("#dulce").draggable({
    revert: "invalid"
  });

  $("#caja2").droppable({ 
    drop: function(event) {
        
        $("#dulce").css({top:$("#caja2").css("top"),left:$("#caja2").css("left")});
        contador++;//entra en funcion correcta y sumamos el contador a mas uno
        if(contador==5) alert(mensajefinal);
        //comprobamos si ha acertado las 5 cajas para mostrar que has ganado
      },
      accept: "#dulce",
      tolerance: "touch"
  });


  $("#salado").draggable({
    revert: "invalid"
  });

  $("#caja3").droppable({
  
    drop: function(event) {
        
        $("#salado").css({top:$("#caja3").css("top"),left:$("#caja3").css("left")});        
        contador++;//entra en funcion correcta y sumamos el contador a mas uno
        if(contador==2) $("#caja").show(2000); {

          //
        }

      },//comprobamos si ha acertado las 2 cajas para pasar al nuevo nivel
      accept: "#salado",
      tolerance: "touch"
     
  });


  $("#amargo").draggable({
    revert: "invalid"
  });

  $("#caja5").droppable({
  
    drop: function(event) {
        
        $("#amargo").css({top:$("#caja5").css("top"),left:$("#caja5").css("left")});
        contador++;//entra en funcion correcta y sumamos el contador a mas uno
        if(contador==4)alert(mensaje4), $("#caja2").show(2000);
      },//comprobamos si ha acertado las 5 cajas para mostrar que has ganado
      accept: "#amargo",
      tolerance: "touch"
  });



  $("#acido").draggable({
    revert: "invalid"
  });

  $("#caja4").droppable({
  
    drop: function(event) {
        
        $("#acido").css({top:$("#caja4").css("top"),left:$("#caja4").css("left")});
        contador++;//entra en funcion correcta y sumamos el contador a mas uno
        if(contador==2) alert(mensaje2), $("#caja").show(2000); ;
      },//comprobamos si ha acertado las 2 cajas para pasar al nuevo nivel
      accept: "#acido",
      tolerance: "touch"
    
    
  });
	
});




	

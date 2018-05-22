// JavaScript Document

$(document).ready(function(e) {
    document. addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft", function(){
			navigator.notificacion.alert("Deslizo hacia la izquierda",function(){"aplicacion 7","ok"});
		});//cerrar deslizar izquierda
		$('#derecha').on("swiperinght", function(){
			navigator.notificacion.confirm("¿Que quieres hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notificacion.beep(1);
					break;
					
					case 2:
					navigator.notificacion.vibrate(3000);
					break;
				}
			},"aplicacion 7","Beepear, Vibrar, Cancelar");
		});//cerrar deslizar derecha
	},false);//cerrar deviceready
});//cerrar ducument
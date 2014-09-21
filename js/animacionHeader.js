$(document).ready(function(){ 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) { 
			// Cuando el scroll baja a una nueva posición
			$('header').addClass('header2');
		}else{
			// Cuando el scroll está en su posición por defecto
			$('header').removeClass('header2');
		};
	});
});
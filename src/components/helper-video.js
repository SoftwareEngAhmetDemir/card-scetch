import $ from 'jquery';
$( document ).ready(function() {
$('#play').on('click', function(e) {
	e.preventDefault();
	$('#play').hide();
	 $("#player")[0].src += "?autoplay=1";
     $('#player').show();
     
     setTimeout(() => {
         $('#video-cover').hide();
     }, 500);
})
});
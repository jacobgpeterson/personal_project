$(function() {
	$(document).on( "focus", "#datepicker", function(){
		$(this).datepicker({minDate: -0, formatDate: 'yy-mm-dd'});
	});
});
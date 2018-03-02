$(document).ready(function(){
				
	// Launch function on click button id calculate			
	$("#calculate").click(function(){
		var spend = 0.0;
  			
  			// Recuparate values of input class expense
	    	$(".expense").each(function(){
			 	spend = parseFloat(spend) + parseFloat($(this).val());
				$("#result").val(spend)
				});

	    	// Recuparate values of input class income
	    	$(".income").each(function(){
			 	spend = parseFloat(spend) + parseFloat($(this).val());
				$("#result").val(spend)
				});	
	});
});		


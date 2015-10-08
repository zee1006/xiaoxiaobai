$(document).ready(function(){
	$("#Clothes_input").hide();
    $("#Clothes").click(function(){
        $("#Clothes").hide();
		$("#Clothes_input").show();
		
    });
	
	$("#delete1").click(function(){
        $("#id1").hide();
		
		
    });
	
	$("#delete2").click(function(){
        $("#id2").hide();
		
		
    });
	
	$("#delete3").click(function(){
        $("#id3").hide();
		
		
    });
	
	$("#delete11").click(function(){
        $("#id11").hide();
		
		
    });
	
	$("#delete12").click(function(){
        $("#id12").hide();
		
		
    });
	
	$("#delete13").click(function(){
        $("#id13").hide();
		
		
    });
	
	
	$(document).keypress(function(e) {
		if(e.which == 13) {
			if ($(':focus').attr("id") === 'Clothes_input')
			{
				$("#Clothes_input").hide();
				$("#Clothes").text($("#Clothes_input").val());
				$("#Clothes").show();
				
			}
			if ($(':focus').attr("id") === 'new_category_input')
			{
				$("#new_category").text($("#new_category_input").val());
				$("#new_category_input").hide();
				$("#new_category").show();
				
			}
			
			
			
			
		}
	});
	
	$("#add").hide();
	$("#add_category").click(function(){
        $("#add").show();	
		$("#new_category").hide();
		$("#new_category_input").show();
		
		
    });
	
	
	
});



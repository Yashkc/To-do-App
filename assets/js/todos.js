//Clicking a todo this will strikethrough and change the text colour
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Clicking the 'X' this will remove the list Item with a slight animation
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//To add todos inside our list
$("input[type=text]").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");		
	}
});

//slight animation on our trash can
$(".fa-plus").on("click",function(){
	$("input[type=text]").fadeToggle();
})
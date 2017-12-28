//insert function
function userInput (event){
	//broken. removes new li after inserting it. event.preventDefault();
		var todoText = $("input[type='text']").val();
		var insertNew = '<li>'+
		 					'<span class = "shopping-item">'+ todoText + '</span>'+ 
		 					'<div class="shopping-item-controls">' +
		 						'<button class="shopping-item-toggle">' +
		 							'<span class="button-label">Check</span>' +
								'</button>' +
								'<button class="shopping-item-delete">' +
		 							'<span class="button-label">Delete</span>' +
								'</button>' +
							'</div>'+
						'</li>';
		$("input[type='text']").val("");
		$("ul.shopping-list").append(insertNew);

}
//insert new to do item with enter
$("input[type='text']").keypress(function(){
	if(event.which === 13){
		userInput();
		event.preventDefault();
	}

});
//insert new todo item with add item button
/*$("button:submit").submit(function(event){
	userInput();
	event.preventDefault();
});*/

// cross off todos by clicking on check

		//doesn't apply to new items


$(".shopping-item-toggle").on("click",  (function(event){
	var listText = $(this).closest('li').find('span.shopping-item');
	if($(listText).hasClass("shopping-item__checked")){
		$(listText).removeClass("shopping-item__checked");	
	} else{
		$(listText).addClass("shopping-item__checked");
	}
	
}));

//click on X to delete todo
/*$("ul").on("click", "span", (function(event){
	$(this).parent().fadeOut(500, deleteTodo);
	event.stopPropagation();
}));*/
function deleteTodo(){
	$(this).remove();
}
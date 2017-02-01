$(function(){		
	$('#container').on('click', function(){
		alert('You clicked the container div');
	})

	$('#myBtn').on('click', function(){
		alert('You clicked me!');
		event.stopPropagation();
	});

	$('#foods').append('<li>Burgers</li>');
	$('#drinks').append('<li>Beer</li>');
	food=['Burgers', 'Fries'];
	for(var i=0; i<food.length; i++){
		$('#foods').append('<li>'+food[i]+'</li>');
	}

	$('#addFood').click(function(){
		var newFood = $('#foodInput').val()
		$('#foods').append('<li>' + newFood + '</li>')
	})

	$('#foodInput').keypress(function(e){
		if(e.keyCode == 13)
			$('#foodInput').parent().parent().addClass('purple');
		else
			$('#foodInput').parent().parent().removeClass('purple');
	})
})
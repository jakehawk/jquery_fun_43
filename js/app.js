$( document ).ready(function(){

  var foods = ['burgers', 'fries', 'pasta', 'shrimp', 'sushi']

  // for (var i = 0; i < foods.length; i++) {
  //   $('#foods').append('<li>' + foods[i] + '</li>')
  // }

  foods.forEach(function(food){
    $('#foods').append('<li>' + food + '</li>')
  })

  $('#drinks').append('<li>Mountain Dew</li><li>Sprite</li><li>Dr. Pepper</li>')

  $('#addFood').on('click', function(){
    var newFood = $('#foodInput').val()
    if(newFood != '') {
      $('#foods').append('<li>' + newFood + '</li>')
      // $('<li />', {html: newFood}).appendTo('ul#foods')
      $('#foodInput').val('')
    }
  })

  $('#addDrink').on('click', function(){
    var newDrink = $('#drinkInput').val()
    if(newDrink != '') {
      $('#drinks').append('<li>' + newDrink + '</li>')
      $('#drinkInput').val('')
    }
  })

  $('#drinkInput').keydown(function(e){
    if(e.keyCode === 13){
      var newDrink = $('#drinkInput').val()
      if(newDrink !== '') {
        $('#drinks').append('<li class="purpleText">' + newDrink + '</li>')
        $('#drinkInput').val('')
        $('#drinkInput').removeClass('purple')
      }
    } else {
      $('#drinkInput').addClass('purple')
    }
  })

})






//
// $(function(){		
// 	$('#container').on('click', function(){
// 		alert('You clicked the container div');
// 	})

// 	$('#myBtn').on('click', function(){
// 		alert('You clicked me!');
// 		event.stopPropagation();
// 	});

// 	$('#foods').append('<li>Burgers</li>');
// 	$('#drinks').append('<li>Beer</li>');
// 	food=['Burgers', 'Fries'];
// 	for(var i=0; i<food.length; i++){
// 		$('#foods').append('<li>'+food[i]+'</li>');
// 	}

// 	$('#addFood').click(function(){
// 		var newFood = $('#foodInput').val()
// 		$('#foods').append('<li>' + newFood + '</li>')
// 	})

// 	$('#foodInput').keypress(function(e){
// 		if(e.keyCode == 13)
// 			$('#foodInput').parent().parent().addClass('purple');
// 		else
// 			$('#foodInput').parent().parent().removeClass('purple');
// 	})
// })
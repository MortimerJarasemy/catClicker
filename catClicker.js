var kitty_increase = 0;

	$('#kittySpawner').on('click', function(event){
		kitty_increase +=1;
		$('.cats').append("<div id=myClicks" + kitty_increase + ">I'm Working</div>");
		$('.myClicks' + kitty_increase).append('<img src="cat.png" alt="catPicture" height="320">')
	});



$(document).ready(function clickCount(){
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;

	document.getElementById('myClicks').value = a;
      myCat = document.getElementById('clickMe');
	       document.getElementById('myClicks1').value = a;
		   myCat = document.getElementById('clickMe');

	  // ampliador primer gato
	    $('#clickMe').on('click', function(event){
	    a = a+1;
		document.getElementById("myClicks").value = a;
	  });
		// ampliador segundo gato
		$('#clickMe1').on('click', function(event){
		b = b+1;
		document.getElementById("myClicks1").value = b;
      });
	    // ampliador tercer gato
	  	$('#clickMe2').on('click', function(event){
	  	c = c+1;
	  	document.getElementById("myClicks2").value = c;
	  });
	  // ampliador cuarto gato
	  	$('#clickMe3').on('click', function(event){
	  	d = d+1;
	  	document.getElementById("myClicks3").value = d;
	  });
	  // ampliador quinto gato
		$('#clickMe4').on('click', function(event){
		e = e+1;
		document.getElementById("myClicks4").value = e;
	  });
 });



  function clickCount(){
	var a = '0';
	document.getElementById("myClicks").value = a;
    var myCat = document.getElementById('clickMe');
      myCat.on('click', function(event){
        a += 1;
    });
  }

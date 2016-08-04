
$(document).ready(function clickCount(){
	var a = '0';
	document.getElementById("myClicks").value = a;
      myCat = document.getElementById('clickMe');
      $('#clickMe').on('click', function(event){
        a = +1;
		document.getElementById("myClicks").value = a;
    });
 });

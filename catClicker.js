
$(document).ready(function clickCount(){
	var a = 0;
	document.getElementById('myClicks').value = a;
      myCat = document.getElementById('clickMe');
      $('#clickMe').on('click', function(event){
        a = a+1;
		document.getElementById("myClicks").value = a;
    });
 });

 $(document).ready(function clickCount(){
 	var a = 0;
 	document.getElementById('myClicks1').value = a;
       myCat = document.getElementById('clickMe');
       $('#clickMe1').on('click', function(event){
         a = a+1;
 		document.getElementById("myClicks1").value = a;
     });
  });

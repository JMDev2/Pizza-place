$(document).ready(function(){
    $("#phone").mouseover(function(){
      $(".text1").toggle();
      
    });
    $("#phone").mouseout(function(){
        $(".text1").hide();
        
      });
   
    $("#email").mouseover(function(){
        $(".text2").toggle();
      });

      $("#email").mouseout(function(){
        $(".text2").hide();
      });
  });

//   capturing the values

$('button#submit').click(function(){
    var pizzaSize = $('#size :selected').text();
    var pizzaCrust = $('#crust :selected').text();
    var pizzaTopping = $("#toppings").val();
    
    console.table(`${pizzaSize} ${pizzaCrust} ${pizzaTopping}`)

   
});
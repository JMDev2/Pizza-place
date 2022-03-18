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

      $("#submit").click(function(){
        $(".display").toggle();
      });

  });

  $(document).ready(function(){
    $('button#submitBtn').click(function() {
      $('.mydisplay').toggle();
    });
       
});
let result = document.querySelector(".result");
result.addEventListener("mouseover", (e)=>{
    result.style.color = "Blue";
    result.style.fontSize = '100px';

})
result.addEventListener("mouseout", (e)=>{
    result.style.color = "black";
    result.style.fontSize = '20px';
})
    
   


//   capturing the values

$('button#submit').click(function(){
    var pizzaSize = $('#size :selected').text();
    var pizzaCrust = $('#crust :selected').text();
    var pizzaTopping = $("input[type='checkbox']:checked").val();
    
    for( var i = 0; i < pizzaTopping.length; i++){
        console.log(pizzaTopping)
    }

    // console.table(`${pizzaTopping} ${pizzaTopping} ${pizzaTopping}`)
    
   
});
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

    $('.mydisplay').mouseover(function() {
      $('button#submitBtn').hide();
    });

    $('.mydisplay').mouseover(function() {
      $('#delivery').show();
    });

    $('#yes').click(function() {
      $('#deliveryForm').show();
    });
    $('#no').click(function() {
      $('#deliveryForm').show();
    });

    $('#yes').click(function() {
      $('#checkoutBtn').show();
    });
    $('#no').click(function() {
      $('#checkoutBtn').show();
    });
       
       
});
let result = document.querySelector(".result");
result.addEventListener("mouseover", (e)=>{
    result.style.color = "Blue";
    result.style.fontSize = '40px';

})
result.addEventListener("mouseout", (e)=>{
    result.style.color = "white";
    result.style.fontSize = '20px';
})
result.innerHTML = (pizzaSize)
    
   


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
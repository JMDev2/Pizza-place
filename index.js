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
      $('#deliveryForm').hide();
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

    
   


//   capturing the values

// $('button#submit').click(function(){
//     var pizzaSize = $('#size :selected').text();
//     var pizzaCrust = $('#crust :selected').text();
//     var pizzaTopping = $("input[type='checkbox']:checked").val();
    
//     for( var i = 0; i < pizzaTopping.length; i++){
//         console.log(pizzaTopping)
//     }

//     // console.table(`${pizzaTopping} ${pizzaTopping} ${pizzaTopping}`)
    
   
// });

let pizzaSize = document.getElementById("size");
let pizzaCrust = document.getElementById("crust")
let pizzaNumber = document.getElementById("number");


let form = document.getElementById("form");

let myCountry = document.getElementById("country")
let myCity = document.getElementById("city")
let myAddress = document.getElementById("address")


let submitBtn = document.getElementById("submitBtn")
let checkoutBtn = document.getElementById("checkoutBtn")


// submitBtn.addEventListener("click", (e)=>{
//   e.preventDefault()
  
//   console.log(`${pizzaSize.value} ${pizzaCrust.value} ${pizzaNumber.value} ${delivery}`)
// })

checkoutBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  // let delivery = form.delivery.value;
  console.log(`${myCountry.value} ${myCity.value} ${myAddress.value}`)
})


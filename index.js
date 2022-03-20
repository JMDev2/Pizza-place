$(document).ready(function () {
  $("#phone").mouseover(function () {
    $(".text1").toggle();

  });
  $("#phone").mouseout(function () {
    $(".text1").hide();

  });

  $("#email").mouseover(function () {
    $(".text2").toggle();
  });

  $("#email").mouseout(function () {
    $(".text2").hide();
  });

  $("#submit").click(function () {
    $(".display").toggle();
  });

});

$(document).ready(function () {
  $('button#submitBtn').click(function () {
    $('.mydisplay').toggle();
  });

  $('.mydisplay').mouseover(function () {
    $('button#submitBtn').hide();
  });

  $('.mydisplay').mouseover(function () {
    $('#delivery').show();
  });

  $('.mydisplay').mouseover(function () {
    $('#deliveryForm').show();
  });
  // $('#no').click(function () {
  //   $('#deliveryForm').hide();
  // });

  $('.mydisplay').mouseover(function () {
    $('#checkoutBtn').show();
  });
  // $('#no').click(function () {
  //   $('#checkoutBtn').show();
  // });


});
let result = document.querySelector(".result");
result.addEventListener("mouseover", (e) => {
  result.style.color = "Blue";
  // result.style.fontSize = '40px';

})
result.addEventListener("mouseout", (e) => {
  result.style.color = "white";
  // result.style.fontSize = '20px';
})


let form = document.getElementById("form");

let myCountry = document.getElementById("country")
let myCity = document.getElementById("city")
let myAddress = document.getElementById("address")

let submitBtn = document.getElementById("submitBtn")
let checkoutBtn = document.getElementById("checkoutBtn")

checkoutBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const yesBtn = document.getElementById('yes');
  yesBtn.checked = true;
 let deliveryfee = 0;
  if (yesBtn === "true"){
    deliveryfee = 200;
    console.log(deliveryfee)
  }

  console.log(` ${myCountry.value} ${myCity.value} ${myAddress.value} ${size.value}`)
  $(".result").append( "<li>" + "Dear customer your order is: " + numberOne.value + " " + size.value + " Pizza.It will be delivered in " +  myCountry.value,", ", myCity.value, ", ", myAddress.value + ". Our Deliveries take a maximum of 2 hours. Regards!" + "</li>");
  alert(`Dear Customer You Ordered ${numberOne.value}  ${size.value} Pizza. It  will be delivered in: ${myCountry.value} ${myCity.value} ${myAddress.value} `)

})

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()

var size = document.getElementById("size").value;
let crust = document.getElementById("crust").value;
var numberOne = parseInt(document.getElementById("numberOne").value);
let myToppings = [];


$("input:checkbox[name='topping']:checked").each(function(){
  myToppings.push($(this).val());
  
 });

const pizza1 = new Pizza(size, crust, numberOne, myToppings)
console.log(`${numberOne}`)

pizza1.getTotalcharge()
 

let newOrder = new Pizza(size, crust, numberOne, myToppings )

if(numberOne === ""){
  alert("Please enter the number of pizza you purchased")
}
else{
  $(".result").append( "<li>" + "Your Total Order is:" + newOrder.getTotalcharge() + "</li>");
}
})  

let price ;
let crust_price;
let sizePrice;
let total = 0

function Pizza(pizzaSize, pizzaCrust, pizzaNumber, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaNumber = pizzaNumber;
  this.pizzaToppings = pizzaToppings;
};

Pizza.prototype.getTotalcharge = function () {
  let sizePrice;
  if (this.pizzaSize === "small"){
    sizePrice = 500
  }
  else if (this.pizzaSize === "Medium"){
    sizePrice = 1000
  }
  else {
    sizePrice = 1500
  }

  let crustPrice;
  if (this.pizzaCrust === "crispy"){
    crustPrice = 400;
  }
  else if (this.pizzaCrust === "stuffed"){
    crustPrice = 200;
  }
  else{
    crustPrice = 300;
  }

  let toppingPrice;
  if(this.pizzaToppings === "olives"){
    toppingPrice = 200;
  }
  else{
    toppingPrice =0;
  }
  

  let total = (sizePrice + crustPrice + toppingPrice) * this.pizzaNumber;
  return total;
  
  
}


//Business Logic:


function Pizza (size, topping, price = 0, price2 = 0){
  this.size = size,
  this.topping = [],
  this.priceSize = price,
  this.priceTopping = price2,
  this.sizeList = ["small", "medium", "large"];
  this.toppingList = ["pepperoni", "sausage", "cheese", "jalapenio", "chicken", "tomato"];
}

Pizza.prototype.price = function(){
  var sizeSelection = this.size
  var sizePrice = this.priceSize;

    if (this.size === "Small") {
      sizePrice += 12
    }
    else if (this.size === "Medium") {
      sizePrice += 17
    }
    else if (this.size === "Large") {
      sizePrice += 22
    }
    return sizePrice;
}


Pizza.prototype.toppingPrice = function(){
  var toppingSelection = this.topping;
  var costOfTopping = 0;

  for (var i = 0 ; i < toppingSelection.length; i ++) {

    if (toppingSelection[i] === 0) {
      costOfTopping += 1.5;
    } else if (toppingSelection[i] === 1) {
      costOfTopping += 4.5;
    } else if (toppingSelection[i] === 2) {
      costOfTopping += 6.5;
    } else if (toppingSelection[i] === 3) {
      costOfTopping += 7.5;
    } else if (toppingSelection[i] === 4) {
      costOfTopping += 8.5;
    } else if (toppingSelection[i] === 5) {
      costOfTopping += 9.5;
    }

  }
    return costOfTopping;
}

//User interface logic:

$(document).ready(function() {

  $("form.questions").submit(function(event) {
    event.preventDefault();

    var inputSize = $("select#pizzaSize").val();
    var inputToppings = document.getElementById("#toppings");

    var userPizza = new Pizza(inputSize, inputToppings);
    displayResults(userPizza);

  });

  function displayResults(pizzaResults){
    var pizzaSizePriceResults = pizzaResults.price();
    var pizzaToppingPriceResults = pizzaResults.toppingPrice();

    $("#result").text(pizzaSizePriceResults);
    $("#result2").text(pizzaToppingPriceResults);

  }

});


// Main function to create submission event
document.getElementById("pizzaform").addEventListener("submit", function(event) {

    //Adding student ID and name
    document.getElementById("StudentId").textContent = "Vanshit Amin - 200556064"
    event.preventDefault();
    
    // Get form elements by various variables
    var size = document.getElementById("PizzaSize").value;
    var crust = document.getElementById("CrustChoice").value;
    var cheese = document.querySelector('input[name="Cheesechoice"]:checked').value;
    var cut = document.querySelector('input[name="CutChoice"]:checked').value;

    // Creating array(sauces) to store selected sauces
    var sauces = [];
    var SelectedSauces = document.querySelectorAll('input[name="SauceSalection"]:checked');
    for (var i = 0; i < SelectedSauces.length; i++) {
        sauces.push(SelectedSauces[i].value)
      }

    // Creating array(toppings) to store selected toppings
    var toppings = [];
    var Selectedtoppings = document.querySelectorAll('input[name="ToppingSelection"]:checked');
    for (var i = 0; i < Selectedtoppings.length; i++) {
        toppings.push(Selectedtoppings[i].value)
      }

    
    // Create a Pizza object
    var pizzaOrder = new Pizza(size, crust, cheese, sauces, toppings, cut);

    

    // Display pizza description
    document.getElementById("pizzaDescription").textContent = pizzaOrder.getOrderDescription();
});


function Pizza(size, crust, cheese, sauces, toppings, cut) {
    this.size = size;
    this.crust = crust;
    this.cheese = cheese;
    this.sauces = sauces;
    this.toppings = toppings;
    this.cut = cut;
    this.getOrderDescription = function() {
        return "|| Pizza Order Description | Size: " + this.size + 
            " | Crust: " + this.crust + " | Cheese: " + this.cheese + 
            " | Sauces: " + this.sauces.join(", ") + " | Toppings: " + this.toppings.join(", ") + " | Cut Choice: " + this.cut +" ||";
    };
}
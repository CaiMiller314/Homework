// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
let pizzaPlace = "Cai's Pizza";
let numberOfToppings = 6

// Print the variables and their types.
console.log(pizzaPlace, typeof(pizzaPlace))
console.log(numberOfToppings, typeof(numberOfToppings))

// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(`${pizzaPlace}` + " has at least " + `${numberOfToppings}` + " toppings per pizza!")
// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
if(numberOfToppings < 10) {
  console.log("Quality not quantity.")
}
if(numberOfToppings > 10) {
  console.log("A whole lot of pizza.")
}

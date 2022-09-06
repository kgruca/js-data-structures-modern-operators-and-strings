'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: openingHours, // as of ES 6 can just write openingHours... this will create a property with the same name and use the data from the outer openingHours object

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

   orderDelivery: function({starterIndex = 0, mainIndex = 0, time = '22:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`);
   },

   orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
   },

   orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
   }
};


//Logical Assignment Operators
const rest1 = {
  name: "Bona",
  numGuests: 50,
};

const rest2 = {
  name: "Pizza Delfina",
  owner: "Svitlana Masovets",
};


// Optional Chaining
// let's say we're looking for opening hours of a day that doesn't exist in restaurant
// console.log(restaurant.openingHours.mon); // logs undefined
// what if we want to go further and find the opening hour of the day that doesn't exist:
// console.log(restaurant.openingHours.mon.open); // logs a TypeError because your are looking for undefined.open
// to get around this error, you could use
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);
// and this only checks for one property (mon). What if you don't know whether openingHours exists or even the restaurant object exist? Then would need:
if (restaurant && restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);
// ES6's solution to this is a feature called Optional Chaining
// Example:
console.log(restaurant.openingHours.mon?.open); // only if the property right before the question mark exists (mon, in this case) then the property after will be read
// if it doesn't exist then undefined will be returned 
// and can do the same for multiple properties in the same statement
console.log(restaurant?.openingHours?.mon?.open); // logs undefined
console.log(restaurant?.openingHours?.thu?.open); // logs 12 

// practical example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed ';
  console.log(`On ${day}, we open at ${open}`); 
}


/*
// Object Literals
// ES6 introduced three new enhancements to writing object literals
// 1. if you are trying to use an independent object as a property inside another object, you used to have to write something like openingHours: openingHours (see comment above in the restaurant object)
// instead, now you can just write openingHours
// 2. function declarations don't need the function keyword anymore. Look at order, orderPasta, and orderPizza vs orderDelivery above. order, orderPasta, and orderPizza use the new enhancement 
// 3. can compute property names (see Enhance Object Literals in Section 9)


// The For-Of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); 
// logs Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto

// can still use "break" and "continue" in the for-of loop

// a weakness of the for-of loop is when you are trying to find the current index
// if you need the index then need to do it like this:
for (const item of menu.entries()) {
  console.log(item);
} 
// logs [0, 'Focaccia'] [1, 'Bruschetta'] [2, 'Garlic Bread'] [3, 'Caprese Salad'] [4, 'Pizza'] [5, 'Pasta'] [6, 'Risotto']
// menu.entries() is an iterator
console.log([...menu.entries()]); // loga [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// when expanded, each array within the resulting array consists of the index and the item from menu 
// can print the menu in a nice way, using the following technique:
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// which logs 1: Focaccia 2: Bruschetta 3: Garlic Bread 4: Caprese Salad 5: Pizza 6: Pasta 7: Risotto
// BUT, can use a better technique: destructure item in the for loop statement
for (const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`); // logs 1: Focaccia 2: Bruschetta 3: Garlic Bread 4: Caprese Salad 5: Pizza 6: Pasta 7: Risotto
}


// let's say we want to set a default number of guests for the objects that don't have this property
// OR Assignment Operator:
// rest1.numGuests = rest1.numGuests || 150;
// rest2.numGuests = rest2.numGuests || 150;
// the two lines above can be written in a more concise way, using the logical OR assignment operator
rest1.numGuests ||= 150;
rest2.numGuests ||= 150;
console.log(rest1.numGuests); // logs 50
console.log(rest2.numGuests); // logs 150 
// once again, there will be a problem if the value is 0 (because it's falsy).
// rest1.numGuests = 0;
// rest1.numGuests ||= 150;
// console.log(rest1.numGuests); // logs 150 instead of 0
// instead, in this situation can use the Nullish Assignment Operator
rest2.numGuests = 0;
rest2.numGuests ??= 150;
console.log(rest2.numGuests); // logs 0
// once again, nullish means null or undefined

// let's say we want to anonymize the name of the owners, if there is a value for owners
// rest2.owner = rest2.owner && "<anonymous>";
// console.log(rest2.owner); // logs <anonymous>
// if you try this with rest1.owner (which doesn't exist), then you will get undefined instead:
// rest1.owner = rest1.owner && "<anonymous>";
// console.log(rest1.owner); // logs undefined
// so in this situation can use nullish operator again
// rest1.owner = rest1.owner ?? '<anonymous>'; 
// console.log(rest1.owner); // logs <anonymous>
// going back to the AND Assignment Operator:
rest2.owner &&= '<anonymous>';
console.log(rest2.owner); // logs <anonymous>


// Nullish Coalescing Operator
// helps deal with the situation when short-circuiting using the OR operator and have a value of 0. Ex:
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // logs 10, even though numGuests was set to 0. This is because the short-circuiting OR operator looks for truthy values and 0 is falsy
// instead can use the nullish coalescing operator
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // logs 0
// this works because the nullish coalescing operater works with the idea of nullish values instead of falsy ones
// Nullish: null or undefined (NOT 0 or '')
// so it searches for null values and omits them. since restaurant.numGuests is not nullish, this gets returned as the value for guests instead of 10
// if hadn't set restaurant.numGuests = 0, then guests would have been logged as 10 instead
const guestsExample = restaurant.numberOfGuests ?? 10;
console.log(guestsExample); // logs 10 since restaurant.numberOfGuests doesn't exist and is therefore undefined


// Logical Operators and Short Circuiting
// logical operators can use ANY data type, return ANY data type, 
console.log(3 || 'Krzysztof'); // logs 3

// Short-circuiting and the OR operator
// in the case of the OR operator: short-circuiting means that if it comes across the first value that is truthy then it will return that value
// because 3 is a truthy value then it gets immediately returned ('Krzysztof' doesn't even get looked at)
console.log('' || 'Krzysztof'); // logs Krzysztof
console.log(true || 0); // logs true
console.log(undefined || null); // logs null, even though null is falsy. Short-circuiting will choose the last value if all values are falsy

// can use short-circuiting if you don't know whether a property exists
// before had to use something like 
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // if restaurant.numGuests doesn't exist then guests1 gets a value of 10
console.log(guests1); // logs 10
// instead you can use 
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // logs 10
// this is an easier way of setting default values than using a ternary operator
// this will not work, however, if the property DOES exist and has a value of 0

// Short-circuiting and the AND operator
// works the opposite way of short-circuiting with the OR operator
console.log(0 && 'Krzysztof'); // logs 0
// this means that short-circuiting with the AND operator returns the first falsy value
console.log(7 && 'Krzysztof'); // logs Krzysztof, since neither value is falsy (returns the last value, same as OR short-circuiting if no value is truthy)

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('pepperoni', 'pineapples'); // logs pepperoni ['pineapples']
}
// the same result as above can be achieved by:
restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'pineapples'); // in one statement checks if restaurant.orderPizza exists and if it does then the function is called with arguments
// logs pepperoni ['pineapples']

// to summarize: the OR operator will return the first truthy value or the last falsy value (if there are only falsy values)
// the AND operator will return the first falsy value, or the last truthy value (if there are only truthy values)


// using the rest operator

// Part 1, Destructuring
// while the spread operator unpacks values from an iterable, the rest operator packages values into an iterable (the opposite of the spread operator)
// SPREAD, because on the RIGHT side of the assignment operator
const arr = [1, 2, ...[3, 4]]; 
// REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // logs 1 2 [3, 4, 5]
// called the rest operator because it groups the rest of the elements of the array/iterable

const [pizza, , risotto, ...otherItems] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherItems); // logs Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// the rest operator must be last in the destructuring assignment, otherwise everything will be included (can't skip anything until the end of the array)
// trying to use the rest operator elsewhere results in a SyntaxError "rest element must be last element"

// works on objects too
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays); // logs {open: 0, close: 24} {thu: {…}, fri: {…}}

// Part 2, functions
// rest arguments
const add = function(...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3); // logs 5
add(2, 3, 4, 5, 6); // logs 20
add(2, 3, 4, 6, 8, 9, 2, 1); // logs 35

// can easily use spread with this
const x = [21, 2];
add(...x); // logs 23

// using rest operator for optional arguements. orderPizza function has one required ingredient, and the rest are optional
restaurant.orderPizza('cheese'); // logs cheese []
restaurant.orderPizza('cheese', 'pepperoni', 'pineapple'); // logs cheese ['pepperoni', 'pineapple']

// to sum up: the spread and rest operators look exactly the same but work in different ways, depending on where they are used
// the SPREAD operator is used where otherwise we would write values separated by a comma 
// the REST operator is used where otherwise we would write variable names separated by a comma 


// using the spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // logs [1, 2, 7, 8, 9]
console.log(badNewArr);
// instead of doing the tedious process above, can use:
const newArr = [1, 2, ...arr];
console.log(newArr); // logs [1, 2, 7, 8, 9]
// the spread operator takes out the individual values out of an arry. Ex:
console.log(...newArr); // doesn't log an array, but logs 1 2 7 8 9. Same as writing:
console.log(1, 2, 7, 8, 9); // logs 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu); // logs ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']
// the spread operator is similar to destructuring, but doesn't create new varaiables
// because of this, it's only used where values are needed to be written, separated by commas

// uses of spread operator: create shallow copies of arrays, and to merge two arrays together
// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(restaurant.starterMenu); // logs ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
console.log(restaurant.mainMenu); // logs ['Pizza', 'Pasta', 'Risotto']
console.log(menu); // logs ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// the spread operator can be used on all iterables
// iterables are arrays, strings, maps, sets, but NOT objects
const str = "Krzysztof";
const letters = [...str];
console.log(letters); // logs ['K', 'r', 'z', 'y', 's', 'z', 't', 'o', 'f']
// console.log(`${...str} Gruca`); // throws a SyntaxError (this is not a place that expects multiple values separated by a comma)
// multiple values separated by a comma could be expected when passing arguments into a function, or building a new array

// ex. of passing arguments into a function using the spread operator
// const pastaIngredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// restaurant.orderPasta(...pastaIngredients); // logs Here is your delicious pasta with sun-dried tomatoes, parsley, and shrimp 
// the logged message above depended on the ingredients written into the window prompt

// since ES2018, the spread operator also works on objects, even though they aren't iterables
// objects
const newRestaurant = {foundedIn: 2030, ...restaurant, founder: 'Krzysztof Gruca'};
console.log(newRestaurant);
// as mentioned above, can create shallow copies of iterables 
const restaurantCopy = {...restaurant};
console.log(restaurant);
console.log(restaurantCopy); // logs same as the restaurant log above
// can then change the values of restaurantCopy without affecting the values of restaurant 
restaurantCopy.name = 'Polsko-włoska Restauracja';
console.log(restaurant.name); // logs Classico Italiano
console.log(restaurantCopy.name); // logs Polsko-włoska Restauracja


// can pass in an object into a function, and destructure the object in the function declaration above
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // logs Order received! Garlic Bread and Risotto will be delivered at 22:30 to Via del Sol, 21

// can also use default values in the desctructured argument in the function declaration
restaurant.orderDelivery({
  address: '1 Infinity Drive',
}); // logs Order received! Focaccia and Pizza will be delivered at 22:00 to 1 Infinity Drive


// OBJECT DESTRUCTURING
// use the variable names from the object
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories); // logs Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// you can also define new variable names, using the following method
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags); // logs Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// you can assign default values, in case you're looking for a variable that doesn't exist within the object (and even combine this with the new variable names as in the example above)
const {menu = [], starterMenu: starters = []} = restaurant; // menu isn't one of the object's properties, so an empty array should be logged. Since starterMenu exists, the default empty array will not be logged
console.log(menu, starters); // logs [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// mutating variables from the object
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
// {a, b} = obj; // generates a syntax error
// instead, to do the above, you wrap everything in parentheses
({a, b} = obj);
console.log(a, b);

// nested objects
// const {fri: {open, close}} = openingHour;
// console.log(fri);

// ARRAY DESTRUCTURING
const arr = [2, 3, 4];
const aVar = arr[0];
const bVar = arr[1];
const cVar = arr[2];

// or, instead you can use array destructuring
const [x, y, z] = arr;
console.log(x, y, z);


let [first, second] = restaurant.categories;
console.log(first, second); // logs Italian Pizzeria 

// if you want to skip certain values then you can omit them with double commas:
const [firstAgain, , third] = restaurant.categories;
console.log(firstAgain, third);

// can do cool things with this, such as switch the values of variables in the array
// this allows you to skip the temp variable. So, instead of:

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second); // logs Pizzeria Italian 

// you can do:
[first, second] = [second, first];
console.log(first, second); // logs Pizzeria Italian


// receive two return values from a function:
const [starter, mainCourse] = restaurant.order(2, 0); 
console.log(starter, mainCourse); // logs Garlic Bread Pizza


// destructuring an array within an array - nested destructuring
const nested = [1, 5, [3, 4]];

// const [i, , j] = nested;
// console.log(i, j); // logs 2 [3, 4]

// what if you want to get all the individual values? Use destructuring within destructuring
const[i, , [j, k]] = nested;
console.log(i, j, k); // logs 1 3 4


// can use default values when trying to destructure an array and don't know how many elements it contains

// const [p, q, r] = [8, 9];
// console.log(p, q, r); // logs 8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // logs 8 9 1
*/
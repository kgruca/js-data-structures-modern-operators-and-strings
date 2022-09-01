'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

   orderDelivery: function({starterIndex = 0, mainIndex = 0, time = '22:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`);
   },

   orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
   },
};


// using the rest operator
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


/*
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
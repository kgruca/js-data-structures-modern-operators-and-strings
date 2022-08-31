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
};

const openingHour = {
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
const {fri: {open, close}} = openingHour;
console.log(fri);


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
/* 
const temp = first;
first = second;
second = temp;
console.log(first, second); // logs Pizzeria Italian 
*/
// you can do:
[first, second] = [second, first];
console.log(first, second); // logs Pizzeria Italian


// receive two return values from a function:
const [starter, mainCourse] = restaurant.order(2, 0); 
console.log(starter, mainCourse); // logs Garlic Bread Pizza


// destructuring an array within an array - nested destructuring
const nested = [1, 5, [3, 4]];
/*
const [i, , j] = nested;
console.log(i, j); // logs 2 [3, 4]
*/
// what if you want to get all the individual values? Use destructuring within destructuring
const[i, , [j, k]] = nested;
console.log(i, j, k); // logs 1 3 4


// can use default values when trying to destructure an array and don't know how many elements it contains
/*
const [p, q, r] = [8, 9];
console.log(p, q, r); // logs 8 9 undefined
*/
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // logs 8 9 1
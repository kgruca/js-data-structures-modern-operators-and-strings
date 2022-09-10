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


const airline = 'LOT';
const plane = 'Dreamliner';
console.log(plane[0]); // logs D
console.log(plane[1]); // logs r
console.log(plane[2]);  // logs e
console.log(plane.length); // logs 10 
console.log(plane.indexOf('e')); // logs 2
// .indexOf() gives the FIRST occurrence of the value you are passing in
// to get the last occurrence, use lastIndexOf()
console.log(plane.lastIndexOf('e')); // logs 8
console.log(airline.indexOf('lot')); // logs -1 because this is not found

// can use indices to extract parts of strings using slice method
console.log(airline.slice(1)); // logs OT
// the first value passed in is the beginning parameter, or where the extraction will start
// the slice method always returns a new string and this can be stored in another variable
// can also specify an end parameter
console.log(airline.slice(0,2)); // logs LO
// the end parameter for the slice method results in values up to but not including the index passed in as the end parameter
// that is why 'T' is not logged, since it's at index 2
// the length of the returned string will always be (end parameter - beginning paremeter)
// instead of hardcoding indices, can use the indexOf method instead
console.log(airline.slice(0, airline.indexOf('T'))); // logs LO
// can use negative ins as values
console.log(plane.slice(0, -1)); // logs Dreamline

// check Middle Seat
const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const lastLetter = seat.slice(-1);
  lastLetter === 'B' || lastLetter === "E" ? console.log('You got the middle seat 💩') : console.log('You did not get the middle seat 🥳');
}

checkMiddleSeat('11A'); // logs You did not get the middle seat 🥳
checkMiddleSeat('27B'); // logs You got the middle seat 💩
checkMiddleSeat('32F'); // logs You did not get the middle seat 🥳
checkMiddleSeat('3E'); // logs You got the middle seat 💩

// string are primitives, so why do they methods?
// when methods are used on a string, JS converts the string into an object with the same context
// this process is called boxing because it takes the string and puts it in a "box" - the object
console.log(new String('Krzysztof')); // logs String {"Krzysztof"}
console.log(typeof new String('Krzysztof')); // logs object

// transforming strings to lower-case and upper-case
console.log(airline.toLowerCase()); // logs lot
console.log(airline.toUpperCase()); // logs LOT 

// fix capitalization in name
const passenger = 'sAsHA'; // want it to look like Sasha
const passengerLower = passenger.toLowerCase(); // makes it sasha
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // logs Sasha

// comparing emails
const email = 'krzysztof@gruca.io';
const loginEmail = '    Krzysztof@Gruca.IO \n';
// need to compare the two emails - usually capitalization doesn't matter in emails
const lowerEmail = loginEmail.toLowerCase(); // creates '    krzysztof@gruca.io \n'
// now to get rid of whitespace:
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // logs krzysztof@gruca.io
// or can do this all in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // logs krzysztof@gruca.io
console.log(email === normalizedEmail); // logs true

// replacing
const priceZloty = '2400,99PLN'; // let's say we want to compare this price to USD 
const priceUSD = priceZloty.replace('PLN', '$').replace(',', '.'); // 2400.99$
console.log(priceUSD); // logs 2400.99$

const announcement = 'All passengers come to boarding door 69. Boarding door 69!';

console.log(announcement.replace('door', 'gate')); // logs All passengers come to boarding gate 69. Boarding door 69!
// so replace() only replaces the first occurrence
console.log('All passengers come to boarding door 69. Boarding door 69!'.replaceAll('door', 'gate')); // logs All passengers come to boarding gate 69. Boarding gate 69!
// replaceAll() replaces all the occurrences
// another solution that can be used is a 'regular expression'
console.log('All passengers come to boarding door 69. Boarding door 69!'.replaceAll(/door/g, 'gate')); // also logs All passengers come to boarding gate 69. Boarding gate 69!
// note: replace() is case-sensistive

// three string methods that return Booleans: includes(), startsWith(), endsWith()
const newPlane = 'Airbus A320neo';
const oldPlane = 'Airbus A320';
console.log(newPlane.includes('A320')); // logs true
console.log(newPlane.includes('Boeing')); // logs false

console.log(newPlane.startsWith('A320')); // logs false
console.log(newPlane.startsWith('Air')); // logs true

console.log(newPlane.endsWith('neo')); // logs true
console.log(newPlane.endsWith('Air')); // logs false

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) console.log('Part of the NEW Airbus family!'); // logs Part of the NEW Airbus family!
if (oldPlane.startsWith('Airbus') && oldPlane.endsWith('neo')) console.log('Part of the NEW Airbus family!'); // logs nothing

// Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard')
  }
};

checkBaggage('I have a laptop, some food, and a pocket Knife'); // logs You are NOT allowed on board
checkBaggage('Socks and a camera'); // logs Welcome aboard
checkBaggage('Got some snacks and a gun for protection'); // logs You are NOT allowed on board


/*
// pros and cons of the 4 built-in data structures: arrays, objects, sets, maps

// there are two more data structures that are built in: WeakMap, WeakSet
// data structures used that are not built-in: stacks, queues, linked lists, trees, hash tables

// sources of data - 
// from the program itself (data written directly into source code), 
// from the UI (data input from user or data written in DOM), 
// from external sources (data fetched from Web API, for example)

// need a simple list of values? use an array or set
// need key-value pairs? use object or map 

// if using API, data comes in a JSON format (which is an object)
// some of the data within the JSON object is an array of objects

// Arrays vs Sets - should be used for simplest of values when don't need to describe the values
// Arrays: use when 
// values need to be ordered
// when need to keep duplicates
// when need to manipulate the data
// Sets: use when 
// working with unique values
// high-performance is really important (searching for an item or deleting an item can be up to 10x faster than for arrays)
// need to remove duplicates from arrays 

// Objects vs Maps - should be used when values need to be described using keys
// Objects: 
// have been the traditional key-value data structure b/c there were no maps before ES6
// biggest advantage over sets is that it's easier to write and access using . and []
// but using objects as key-value stores has some technical disadvantages (some people say objects are abused for this)
// Maps:
// offer better performance (are better-suited for simple key-value stores)
// can use any data types as the keys
// easy to iterate
// easy to compute the size

// Objects: use when 
// you need to include functions (methods)
// working with JSON
// Sets: use when
// simply need to map keys to values
// need keys that are not strings  


// there's another way to populate a map besides the set method
// set method is cumbersome when there are a lot of values to set
// instead can use an array of array to add values when creating the map
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Wrong 💩']
]);
console.log(question); 
// logs {'question' => 'What is the best programming language in the world?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}
// this array of arrays makes this very similar to Object.entries(), which means that there is an easy way to convert from objects to maps
console.log(Object.entries(openingHours)); // logs [Array(2), Array(2), Array(2)]
const hoursMap = new Map(Object.entries(openingHours)); 
// can do this, since the structure of object.entries is exactly the same structure as the array of arrays passed into question
console.log(hoursMap); // logs {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}
// remember this for when you need a map and already have an object

// maps are iterables
// Ex. Quiz App
// commenting out to get rid of prompt popup
// console.log(question.get('question')); // logs What is the best programming language in the world?
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// logs Answer 1: C Answer 2: Java Answer 3: JavaScript
// const answer = Number(prompt(' Your answer: '));
// answer === question.get('correct') ? alert(question.get(true)) : alert(question.get(false)); // this works but can simplify
// alert(question.get(answer === question.get('correct')));


// sometimes we also need to convert a map back into an array
// Convert map to array:
console.log([...question]); // unpack the map using the spread operator within an array
// logs [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// can also use some of the same methods as arrays
console.log(question.entries()); // logs {'question' => 'What is the best programming language in the world?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}
console.log(question.keys()); // logs {'question', 1, 2, 3, 'correct', …}
console.log(question.values()); // logs MapIterator {'What is the best programming language in the world?', 'C', 'Java', 'JavaScript', 3, …}  
// to create a nicer log, can put each of the above into an array and use the spread operator
console.log([...question.entries()]); // logs MapIterator [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log([...question.keys()]); // logs MapIterator ['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]); // logs ['What is the best programming language in the world?', 'C', 'Java', 'JavaScript', 3, 'Correct 🎉', 'Wrong 💩']


// Maps: Fundamentals
// a map is a data structure which can be used to map values to keys
// just like objects, maps are stored as key-value pairs
// the big difference is that in maps, keys can be of any types - in objects, they are strings
const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Firenze, Italia');
rest.set(2, 'Mountain View, USA');
console.log(rest.set(3, 'Krakow, Polska')); // can add a new key-value pair when using console.log
// logs {'name' => 'Clasico Italiano', 1 => 'Firenze, Italia', 2 => 'Mountain View, USA', 3 => 'Krakow, Polska'}
// because the set method returns the updated map, we can chain it 
rest.set('categories', ['Italian', 'Pizzeria', 'Healthy', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');
console.log(rest.get('name')); // logs Clasico Italiano
console.log(rest.get(true)); // logs We are open :D
console.log(rest.get('1')); // logs undefined, because there is no '1' key (just 1)

const time = 21;
// check to see if the restaurant is open or closed at 21
console.log(rest.get(time >= rest.get('open') && time < rest.get('close'))); // can do this, since the outcome will either be true or false:
// logs We are open :D

// using the has method
console.log(rest.has('categories')); // logs true

// delete elements from map
rest.delete(2); 
console.log(rest); // logs {'name' => 'Clasico Italiano', 1 => 'Firenze, Italia', 3 => 'Krakow, Polska', 'categories' => Array(4), 'open' => 11, …}
// can also delete object elements using the delete parameter but that's a slow process and its use is discouraged

// the size method checks for the "length" of the map
console.log(rest.size); // logs 8 

// the clear method removes all items from the map
rest.clear();
console.log(rest); // logs {size: 0}

// can even set arrays as the key
rest.set([1, 2], 'test');
console.log(rest.get([1, 2])); // logs undefined - need to get the value in a different way
// the reason for this is that the two arrays (in the .set method call, and in the console.log call) are two separate objects in the heap
// instead, need to create an array first, then use that array in the .set method
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr)); // logs test

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); // logs {Array(2) => 'test', Array(2) => 'test', h1 => 'Heading'}
// when you expand the output of the above console.log statement, and hover over the h1 key, it highlight the h1 header on the page


// Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet); // logs {'Pasta', 'Pizza', 'Risotto'}
// a set is therefore very much like an array, but differs in that:
// all the duplicates are gone
// and the order of items in a set is irrelevent
// just like arrays, sets are iterables. Strings are also iterables and can be passed into sets
console.log(new Set('Krzysztof')); // logs {'K', 'r', 'z', 'y', 's', …}
// since sets only store unique values, they can be used to find the number of unique elements that have been passed in
console.log(ordersSet.size); // logs 3
// can check if a certain element is in a set:
console.log(ordersSet.has('Pizza')); // logs true
console.log(ordersSet.has('Bread')); // logs false
// can add new elements to a set
ordersSet.add('Garlic Bread');
console.log(ordersSet); // {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
ordersSet.delete('Risotto');
console.log(ordersSet); // logs {'Pasta', 'Pizza', 'Garlic Bread'}
// cannot retrieve an element by index
console.log(ordersSet[1]); // logs undefined
// in sets, there are no indeces, and no ways to get a value out of a set
// no need to get values out of a set, because for this you can just use an array
// can clear the data in a set
// ordersSet.clear();
// console.log(ordersSet); // returns {size: 0}
// can loop through a set, just like any other iterable
for (const order of ordersSet) console.log(order); // logs Pasta Pizza Garlic Bread

// one big use case of sets is to remove duplicate values out of arrays. Ex:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// let's say we want the unique values from the array above 
// const staffUnique = new Set(staff);
// console.log(staffUnique); // logs {'Waiter', 'Chef', 'Manager'}
// you can use this and destructuring (works on sets, too), to quickly create a new array with unique values
const staffUnique = [... new Set(staff)];
console.log(staffUnique); // logs ['Waiter', 'Chef', 'Manager']
// if you want to know just the size of the unique positions then you can do it like this:
console.log(new Set(staff).size); // logs 3
// to sum up: use sets when you need to work with unique values


// Looping objects
// Property Names
const properties = Object.keys(openingHours);
console.log(properties); // logs ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr); // logs We are open on 3 days: thu, fri, sat, 

// Property Values
const values = Object.values(openingHours);
console.log(values); // logs 0: {open: 12, close: 22} 1: {open: 11, close: 23} 2: {open: 0, close: 24} length: 3 [[Prototype]]: Array(0)

// Entire object
const entries = Object.entries(openingHours);
console.log(entries); // logs [Array(2), Array(2), Array(2)] 0: (2) ['thu', {…}] 1: (2) ['fri', {…}] 2: (2) ['sat', {…}] length: 3 [[Prototype]]: Array(0)

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
// destructure entries above to the keys, and the values
// since values is an object, this can be destructured further to {open, close}
// logs On thu we open at 12 and close at 22 On fri we open at 11 and close at 23 On sat we open at 0 and close at 24


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


//Logical Assignment Operators
const rest1 = {
  name: "Bona",
  numGuests: 50,
};

const rest2 = {
  name: "Pizza Delfina",
  owner: "Svitlana Masovets",
};


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
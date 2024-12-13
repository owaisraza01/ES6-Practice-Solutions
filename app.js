//Global Scope
var varGlobalVariable = "var";
let letGlobalVariable = "let";
const constGlobalVariable = "const";
console.log(varGlobalVariable, letGlobalVariable, constGlobalVariable);//Output: var let const
//Yes they are accessible globally

//Function Scope
function functionScope() {
    // var varFunctionalVariable = "functional var";
    // let letFunctionalVariable = "functional let";
    // const constFunctionalVariable = "functional const";
}
// console.log(varFunctionalVariable, letFunctionalVariable, constFunctionalVariable);//Output: not defined
//None of them is accessible outside the functional scope

//Block Scope
// if(varGlobalVariable){
//     var varBlockVariable = "block var";
//     // let letBlockVariable = "block let";
//     // const constBlockVariable = "block const";
// }
// console.log(varBlockVariable, letBlockVariable, constBlockVariable); //Output: block var
//Only var is accessible outside the block scope

//Hoisting
// console.log(hoistedVar);//Output: undefined
// var hoistedVar = "hoisted var"

// Hoisting with let and const
// console.log(hoistedLet, hoistedConst);//Output: Cannot access before initialization
// let hoistedLet = "hoisted let";
// let hoistedConst = "hoisted const";

//Re-declaration
var sameVar = "Same Var 1";
var sameVar = "Same Var 2";

let sameLet = "Same Let";
// let sameLet = "Same Let";

const sameConst = "Same Const";
// const sameConst = "Same Const";
//Var gets redecalred while other doesn't

//Re-assignment
var assignedVar = "assigned var";
assignedVar = "reassigned var";

let assignedLet = "assigned let";
assignedLet = "reassigned let";

const assignedConst = "assigned const";
// assignedConst = "reassigned const" //reassignment to constant variable is not allowed

// TDZ
// {
//     const tdzLet;
//     console.log(tdzLet);
//     tdzLet = "TDZLET"
//     // Missing initializer in const declaration
// }

//Good use case of var, let, const
// var globalVariable = "abc";
// console.log(globalVariable);
// {
//     let blockVariable = "abc2"
//     console.log(blockVariable);
// }
// const pi = 3.142;
// console.log(pi);

//String Interpolation
// let firstName = "Owais";
// let lastName = "Raza";
// console.log(`My name is: ${firstName} ${lastName}`);

//Multi-line String
// let greeting = `Hello my name is ${firstName} ${lastName}
// I am from Karachi Pakistan`;
// console.log(greeting);

//Simple Expressions
// let a = 56;
// let b = 99;
// console.log(`The sum of a and b is ${a+b}`);

// Functions Calls
// function sumOfNumbers(a,b){
//     console.log(a + b);
// };
// let sumOfNum = `Sum of a and b ${sumOfNumbers(a,b)}`;
// console.log(sumOfNumbers);

// Tag Function
// let fullName = "Muhammad Owais Raza";
// // let cityName = "Karachi";

// // function tagFunction(a,b){
// //     console.log(`Template string: ${a}`);
// //     console.log(`Second template string: ${b}`);
// // }
// // tagFunction(`Hello my name is ${fullName}`, `I am from ${cityName}`);

// Uppercase Formatting
// function upperCase(a) {
//     console.log(a.toUpperCase());
// };

// upperCase(`My name is ${fullName}`);

//Conditional Hour Logic
// const getDate = new Date();
// let getHour = getDate.getHours();
// console.log(getHour);


// function showMessage(getHour){
//     if(getHour >= 0 && getHour <= 12 ){
//         console.log("Its Morning and Midnight time");
//     }
//     else if(getHour >= 13 && getHour <= 24){
//         console.log("Its Afternoon and Night time");
//     }
//     else{
//         console.log("Invalid Value");
//     }
// }
// showMessage(getHour);

//Loops Within Template Literals
// let arrayOfItems = ["Potato", "Tomato", "Cheese", "Pizza", "Burger", "Cold Drink"];
// function addItems() {
//     // Get the shopping list element from the DOM
//     let itemsList = document.getElementById("shoppingList");

//     // Check if the element exists to avoid errors
//     if (itemsList) {
//         // Clear any existing list items
//         itemsList.innerHTML = "";

//         // Add each item from the array as a list item
//         for (let i = 0; i < arrayOfItems.length; i++) {
//             itemsList.innerHTML += `<li>${arrayOfItems[i]}</li>`;
//         }
//     } else {
//         console.error("Element with ID 'shoppingList' not found.");
//     }
// }

// Escaping Backticks
// let backTick = "owais`raza`haroon"
// console.log(backTick);

// Simple age condition
// let age = prompt("Enter your age")
// let canVote = age >= 18 ? "User is eligible for voting" : "Not eligible for voting";
// console.log(canVote);

//Even or Odd
// let inputNumber = +prompt("Enter any number");
// let evenOrOdd = inputNumber % 2 == 0 ? "Number is even" : inputNumber % 2 >= 1 ? "Number is odd" : "Invalid number";
// console.log(evenOrOdd);

//Grade Evaluation
// let inputPercentage = +prompt("Enter your percentage for grading");
// let grade = inputPercentage >= 90 ? "A"
//     : inputPercentage >= 80 && inputPercentage < 90 ? "B"
//     : inputPercentage >= 70 && inputPercentage < 80 ? "C"
//     : inputPercentage >= 60 && inputPercentage < 70 ? "D"
//     : inputPercentage >= 50 && inputPercentage < 60 ? "E"
//     : inputPercentage >= 40 && inputPercentage < 50 ? "F"
//     : "Invalid input";
// console.log(grade);

//Login Status
// let isLoggedIn = "tru";
// let statusMessage = isLoggedIn == true ? "Welcome Back Champ!"
//     : isLoggedIn == false ? "Please Log in first"
//         : "Invalid value";
// console.log(statusMessage);

//Discount Eligibility
// let isMember = true;
// let purchaseAmount = 90000000;
// let totalAmount = 0;
// let checkDiscount = isMember && purchaseAmount > 100 ? `Your total amount is ${purchaseAmount/100*90}`
//     : "You are not eligible for discount"
// ;
// console.log(checkDiscount);

//Determine Max Value
// function maxValue(a,b){
//     let maxValue = 0;
//     if(a>b){
//         maxValue = a
//     }
//     else{
//         maxValue = b
//     }
//     return maxValue;
// }
// let max = maxValue(55,67);
// console.log(`Max value is: ${max}`);

//Greeting Message
// function greetGuest(name){
//     if(name == ""){
//         console.log("Hello guest!");
//     }
//     else{
//         console.log(`Hello ${name}`);
//     }
// }
// greetGuest("Owais")

//Mapping Value
// let arrayOfNumber = [5,4,6,3,9,2,7];
// let secondArray = arrayOfNumber.map(item => {
//     return item % 2 == 0 ?
//     item * 2
//     : item * 3
// });
// console.log(secondArray);

//FIltering Value
// let arrayOfString = ["owais", "cheese", "or","i", "chiwiwi"]
// let filterArray = arrayOfString.filter(item => {
//     return item.length > 3
// })
// console.log(filterArray);

//Copying and Merging Array
// let duplicateArray = [...originalArray];
// let mergedArray = [...originalArray, ...duplicateArray]
// console.log(originalArray, duplicateArray, mergedArray);

//Copying and Merging Object
// let originalObject = {
//     name: "Owais",
//     age: 22,
//     designation: 'student'
// }
// let duplicateArray = {...originalObject}
// let mergedObject = {...originalObject, ...duplicateArray}
// console.log(originalObject, duplicateArray, mergedObject);

//Passing Array Elements as Arguments
// let numbers = [3,5,8]
// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(...numbers));

//Combining Multiple Arrays
// let number2 = [6,2,9]
// function combineArrays(arr1,arr2){
//     return [...arr1, ...arr2]
// }
// console.log(combineArrays(numbers,number2));

//Rest Parameter with spread operator
// function multiply(a, ...rest){
//     return rest.map(rest => a*rest);
// }
// console.log(multiply(4,5,3,8,2,9,1));

//Spread Operator with Nested Structures
// let nestedArray = [[1,3,2,5],[7,8,3,6,7]]
// let shallowCopy = [...nestedArray]
// shallowCopy[0][2] = 3
// console.log(nestedArray, shallowCopy);


//Sum Function
// function sum(...numbers){
//     return numbers.reduce((total,num) => total+num,0);
// }
// console.log(sum(9,1,10,11,9));

//Average Function
// function average(...numbers){
//     let sum = numbers.reduce((total,num) => total+num,0);
//     return sum/numbers.length
// }
// console.log(average(9,1,10,11,9));

//First and Rest
// let numbers = [9,8,4,6,2,9,10];
// let[first,...rest] = numbers
// console.log(first,rest);

//Skip and Rest
// let colors = ["red", "yellow", "green", "purple", "blue"]
// let [, , ...remainingColors] = colors;
// console.log(remainingColors);

//Basic Destructuring
// let person = {
//     name: "Owais",
//     age: 22,
//     email: "abc@123",
//     address: "Karachi"
// }
// let{name, email, ...rest} = person
// console.log(name, email, rest);

//Nested Destructuring
// let student = {
//     id: 42,
//     name: "Owais",
//     grades: 45,
//     info:{
//         age: 22,
//         major: "SE"
//     }
// }
// let{id, name, info: {major}, ...rest} = student
// console.log(id, name, major, rest );

//Filter Even Numbers
// function filterEven(...numbers){
//     return numbers.filter(element => element % 2 === 0);
// }
// console.log(filterEven(9,8,4,6,2,10,11));

//Combine and Sort Arrays
// function combineAndSort(arr1, arr2){
//     let combinedArray = [...arr1, ...arr2];
//     return combinedArray.sort((a,b) => a-b);
// }
// console.log(combineAndSort([9,8,2,10], [10,2,5,18]));

//Basic Destructuring
// let fruits = ["apple", "banana", "cherry"];
// let [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit, secondFruit, thirdFruit);

//Skipping Elements
// let colors = ["red", "green", "blue", "yellow"];
// let[primaryColor, , tertiaryColor] = colors
// console.log(primaryColor, tertiaryColor);

//Rest Operator
// let numbers = [1,2,3,4,5];
// let[firstNumber, ...rest] = numbers;
// console.log(firstNumber, rest);

//Basic Destructuring
// let person = {
//     name: "Owais",
//     age: 22,
//     city: "Karachi"
// }
// let{name, age, city} = person;
// console.log(name, age, city);

//Renaming variable
// let car = {
//     make: "Japanese",
//     model: "City",
//     year: 2025
// }
// let{make: carMake, model: carModel, year: carYear} = car;
// console.log(carMake, carModel, carYear);

//Default Values
// let settings = {
//     theme: "Dark"
// }
// let{theme, language = "English"} = settings
// console.log(theme, language);

//Array of Arrays
// let nestedArray = [[7,8], [1,2], [3,4]]
// let[[a], [b], [c]]=nestedArray
// console.log(a,b,c);

//Object within an Object
// let profile = {
//     username: "Owais raza",
//     details: {
//         email: "abc@123",
//         address : "Karachi"
//     }
// }
// let{username, details: {email}, details: {address}} = profile
// console.log(username, email, address);

//Mix of Arrays and Objects
// let data = {
//     id: 55,
//     info: [{name: "Alice"}, {age: 25}]
// }
// let{id, info: [{name}, {age}]} = data
// console.log(id, name, age);

//Array Parameters
// function printCoordinates(arr){
//     let[x,y] = arr
//     console.log(x,y);
// }
// printCoordinates([5,8])

//Object Parameters
// function displayUser(obj){
//     let{name, age} = obj
//     console.log(name, age);
// }
// displayUser({name: "Owais", age: 22})

//List Property Names
// let book = {
//     title: "AlChemist",
//     author: "William Wordsworth",
//     year: 2002
// }
// let objkeys = Object.keys(book)
// console.log(objkeys);

//Count Properties
// let student = {
//     name: "Owais",
//     age: 25,
//     grade: "A",
//     school: "SPS"
// }
// let objKeys = Object.keys(student);
// console.log(`No. of properties in student obj are: ${objKeys.length}`);

//Iterate Over Keys
// let product = {
//     name : "Milk",
//     price: 200,
//     category: "dairy"
// }
// let objKeys = Object.keys(product)
// let iterate = objKeys.forEach(element => console.log(`${element} : ${product[element]}`))

//List Property Values
// let movie = {
//     title: "Gone Baby Gone",
//     director: "Morgan Freeman",
//     year: 2007,
//     genre: "Action"
// }
// let objValue = Object.values(movie);
// console.log(objValue);

//Sum Values
// let scores = {
//     math : 99,
//     science: 85,
//     english: 100
// }
// let objValues = Object.values(scores);
// let sum = objValues.reduce((a,b) => a+b,0)
// console.log(sum);

//Iterated over Values
// let user = {
//     username: "owais",
//     email: "abc@123",
//     location: "Karachi"
// }
// let objValues = Object.values(user);
// let iterate = objValues.forEach(element => console.log(element));

//List Entries
// let car = {
//     make: "German",
//     model: "Mira",
//     year: "2021"
// }
// let objPair = Object.entries(car)
// console.log(objPair);

//Convert Object to Array
// let person = {
//     firstName: "Owais",
//     lastName: "Raza",
//     age: 30
// }
// let objPair = Object.entries(person);
// console.log(objPair);

//Iterate Over Entries
// let settings = {
//     theme: "Light",
//     notifications: "On",
//     privacy: "Public"
// }
// let objEntries = Object.entries(settings)
// let iterate = objEntries.forEach(element => console.log(element));

//Filter Keys
// let inventory = {
//     apples: 9,
//     bananas: 15,
//     oranges: 5,
//     grapes: 91
// }
// let objKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
// console.log(objKeys);

//Transform Values
// let temperatures = {
//     morning: 15,
//     afternoon: 30,
//     evening: 20
// }
// let objEntries = Object.entries(temperatures).map((time, celcius) => {
//     let fahrenheit = (celcius * 9/5) + 32;
//     return [time, fahrenheit];
// });
// let temperatureInFahrenheit = Object.fromEntries(objEntries)
// console.log(temperatureInFahrenheit);

//Key-Value Swap
// let roles = {
//     admin: "Owais",
//     editor: "Kashaan",
//     viewer: "Sufiyan"
// }
// let objEntries = Object.entries(roles).map(([key, value]) => {
//     return [value, key];
// })

// let roleSwap = Object.fromEntries(objEntries);
// console.log(roleSwap);

//Filter and Map
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// function filterAndMap(array, filterArr, mapArr){
//     return array.filter(filterArr).map(mapArr);
// }
// const isOdd = num => num % 2 !== 0;
// const square = num => num*num;
// const result = filterAndMap(numbers, isOdd, square)
// console.log(result);

//Sort and Reduce
// let words = ["apple", "banana", "cherry", "date"];
// function sortAndReduce(arr, sortArr, reduceArr){

// }
// const sortArray = word.sort();

//Simple Callback
// function greet(name, callback){
//     const message = `Hello, ${name}!`;
//     callback(message);
// }
// function printGreeting(message){
//     console.log(message);
// }
// greet("Owais", printGreeting);

//Asynchronous Callback
// function fetchData(callback){
//     console.log("Fetching data...");
//     setTimeout(() => {
//         const data = {id: 1, name: "Owais", email: "abc@123"};
//         callback(data);
//     }, 4000);
// }
// function displayData(data){
//     console.log("Fetched Data:",data);
// }
// fetchData(displayData);

// Simple Arrow Function
// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(5,3));

//Arrow Function with Array Methods
// let numbers = [1,2,3,4,5];
// const squaredArray = (numbers) => {
//     return numbers.map(element => element*element)
// }
// console.log(squaredArray(numbers));

//Variable Scope
// function outer(){
//     let x = 77;
//     function inner(x){
//         console.log(x);
//     }
//     inner(x);
// }
// outer();

//Closure
// function createCounter(){
//     let counter = 0;
//     return function(){
//         counter++;
//         console.log(`Current Counter Value: ${counter}`);
//     };
// }
// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1();
// counter2();
// counter1();
// counter2();
// counter1();
// counter2();

//Simple Default Parameters
// function greet(name, message = "Hello"){
//     console.log(`${message}, ${name}`);
// }
// greet("Owais");
// greet();

//Default Parameters with Other Arguments
// function calculateArea(width = 20, height = 45){
//     console.log(width*height);
// }
// calculateArea(9,10);
// calculateArea();

//Square Numbers
// let numbers = [1,2,3,4,5];
// let squaredArray = (numbers) => numbers.map(element => element*element)
// console.log(squaredArray(numbers));

//Convert to Uppercase
// let words = ["apple", "banana", "cherry"]
// let uppercase = (words) => words.map(element => element.toUpperCase());
// console.log(uppercase(words));

//Filter Even Numbers
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let filteredArray = (numbers) => numbers.filter(element => element%2 === 0);
// console.log(filteredArray(numbers));

//Filter Long Words
// let words = ["apple", "banana", "cherry", "date"];
// let filteredArray = (words) => words.filter(element => element.length > 5);
// console.log(filteredArray(words));

//Log Numbers
// let numbers = [1,2,3,4,5];
// let iterate = numbers.forEach(element => console.log(element));

//Log Word Lengths
// let words = ["apple", "banana", "cherry"];
// let iterate = words.forEach(element => console.log(element.length));

//Sum of Numbers
// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((a,b) => a+b,0);
// console.log(sum);

// Concatenate Strings
// let words = ["Hello", "world", "this", "is", "JavaScript"];
// let concatenate = words.reduce((a,b) => a+b);
// console.log(concatenate);

//Check for Even Number
// let numbers = [1,3,5,7,8];
// let checkEven = numbers.some(element => element % 2 === 0);
// console.log(checkEven);

//Check Long Word
// let words = ["apple", "banana", "cherry", "date"];
// let checkLongWord = words.some(element => element.length > 5)
// console.log(checkLongWord);

//Check All Even Numbers
// let numbers = [2,4,6,8,10];
// let checkEven = numbers.every(element => element%2 === 0);
// console.log(checkEven);

//Check Long Words
// let words = ["elephant", "giraffe", "hippopotamus"]
// let checkLongWord = words.every(element => element.length>5);
// console.log(checkLongWord);

//Find First Even Number
// let numbers = [1,3,5,7,8]
// let findEven = numbers.find(element => element % 2 === 0);
// console.log(findEven);

//Find Long Word
// let words = ["apple", "banana", "cherry", "date"]
// let findLongest = words.find(element => element.length > 5);
// console.log(findLongest);

//Find Index of Even
// let numbers = [1,3,5,7,8]
// let findEvenIndex = numbers.findIndex(element => element % 2 === 0);
// console.log(findEvenIndex);

//Find Index of Longest
// let words = ["apple", "banana", "cherry", "date"]
// let findLongestIndex = words.findIndex(element => element.length > 5);
// console.log(findLongestIndex);

//Simple Promise
// function delay(microseconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, microseconds);
//     });
// }
// delay(4000).then(() => {
//     console.log(`Hello World!`);
// })

//Promise Chain
// function fetchData() {
//     return new Promise((resolve) => {
//         const data = "Dummy Data";
//         resolve(data)
//     });
// }
// fetchData().then((data) => {
//     console.log(data);
// })

//Error Handling
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         const data = { id: 27, name: "owais", age: 22 }
//         if (data.id !== undefined) {
//             resolve(data)
//         } else {
//             reject("Missing user data")
//         }
//     });
// }
// fetchUserData().then((data) => console.log("User Data", data)).catch((error) => console.error(error));

//Simulate Network Request
// function getWeather() {
//     console.log("Fetching Data....");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.5;
//             if (success) {
//                 const weatherData = {
//                     location: "New York",
//                     temperature: 25,
//                     condition: "Sunny"
//                 };
//                 resolve(weatherData)
//             } else {
//                 reject("Error fetching weather data!")
//             }
//         }, 4000);
//     })
// }
// getWeather().then((data) => {
//     console.log(data)
// })
//     .catch((error) => {
//         console.error(error);

//     })

//Simple async Function
// const simpleAsync = async() => {
//     await delay(2000);
//     console.log("Hello World!");
// }
// simpleAsync()

//Fetch data with async/await
// const getUserData = async () => {
//     try {
//         let data = await fetchUserData();
//         console.log(data);

//     } catch (error) {
//         console.error(error);
//     }
// }
// getUserData();

//Fetch and Process Data
// const fetchUser = () => {
//     return new Promise((resolve) => {
//         let userData = {name: "Owais", age: 22};
//         resolve(userData)
//     })
// }
// const fetchPosts = () => {
//     return new Promise((resolve) => {
//         let posts = [1,5,8,2];
//         resolve(posts)
//     })
// }
// const getUserAndPosts = async() => {
//     let fetchUserData = await fetchUser();
//     let fetchPostData = await fetchPosts();
//     console.log(fetchUserData, fetchPostData);
// }
// getUserAndPosts();

// Error Handling in async/await
// const fetchUser = () => {
//     return new Promise((resolve, reject) => {
//         let userData = { name: "Owais", age: 22 };
//         if (id !== "undefined") {
//             resolve(userData)
//         } 
//     })
// }
// const getUserInfo = async () => {
//     try {
//         let fetchUserData = await fetchUser();
//         console.log(fetchUserData);

//     } catch (error) {
//         console.log("Invalid Data", error);
//     }
// }
// getUserInfo();

//Simulate API Calls
// function apiCall() {
//     console.log("Fetching Data from an api....");
//     return new Promise((resolve, reject) => {
//         const delay = Math.random() * 2000 + 1000;
//         setTimeout(() => {
//             const isSuccess = Math.random() > 0.2;
//             if (isSuccess) {
//                 const data = "Data Fetched Successfully";
//                 resolve(data)
//             }
//             else{
//                 reject("Failed to fetch data!")
//             }

//         }, delay)
//     })
// };

// const getData = async () => {
//         try {
//             const result1 = await apiCall();
//             console.log("API Call 1:", result1);
//         } catch (error) {
//             console.log("Error during API call:", error);
//         }
//         try {
//             const result2 = await apiCall();
//             console.log("API Call 2:", result2);
//         } catch (error) {
//             console.log("Error during API call:", error);
//         }
//         try {
//             const result3 = await apiCall();
//             console.log("API Call 3:", result3);
//         } catch (error) {
//             console.log("Error during API call:", error);
//         }
// }
// getData();

const checkPalindrome = (string) => {
    let reversedString = "";
    console.log("hello");
    for(let i = string.length - 1; i > 0; i--){
        reversedString += string[i];
    }
    console.log(reversedString);
    let isPalindrome = true;
    if(string === reversedString){
        isPalindrome = true
    } else {
        isPalindrome = false
    }
    return isPalindrome
}
checkPalindrome("madam");






















































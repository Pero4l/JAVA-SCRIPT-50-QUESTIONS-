// JavaScript Hands-On Coding Challenges (50 Questions)
// 🟢 Beginner (1–20)








// 19. Write a function that checks if a string contains the letter 'a'.
// 20. Create a function that converts minutes to seconds.
// 🟡 Intermediate (21–35)
// 21. Write a function that removes duplicates from an array.
// 22. Create a function that capitalizes the first letter of each word in a string.
// 23. Write a function that counts the number of vowels in a string.
// 24. Write a function that returns true if a string is a palindrome.
// 25. Create a function that returns the factorial of a number.
// 26. Write a function that returns a new array with only even numbers from the input array.
// 27. Write a function that simulates a simple calculator (add, subtract, multiply, divide).
// 28. Create a function that returns the current date and time.
// 29. Write a function that finds the intersection of two arrays.
// 30. Write a function that flattens a nested array.
// 31. Create a function that returns a random element from an array.
// 32. Write a function that checks if all elements in an array are numbers.
// 33. Write a function that finds the second largest number in an array.
// 34. Write a function that converts a string to kebab-case.
// 35. Create a function that generates a random password of given length.
// 🔴 Advanced (36–50)
// 36. Create a custom map function that works like Array.prototype.map.
// 37. Write a function using setTimeout to log numbers 1 to 5 with a delay of 1 second between each.
// 38. Build a closure that counts how many times a function has been called.
// 39. Create a function that fetches data from an API and logs the result (mock with fetch).
// 40. Write a function that deep clones a nested object.
// 41. Create a memoized function that returns the nth Fibonacci number.
// 42. Write a function that formats a number as currency (e.g., 1234.56 -> $1,234.56).
// 43. Create a debounce function that delays execution until input stops for a set time.
// 44. Write a throttle function that limits the number of times a function can be called.
// 45. Create a function that compares two objects for deep equality.
// 46. Write a function that implements a simple event emitter pattern.
// 47. Create a function that parses a query string into an object.
// 48. Write a function that converts an object to a query string.
// 49. Create a function that dynamically loads a script into the page.
// 50. Build a simple pub-sub (publish-subscribe) system in JavaScript.




// 1.  Write a function that takes a number and returns its square.

function square(num){

   let square = num * num

   return square
}

console.log(square(10));



// 2.  Create an array of 5 numbers and print each one using a loop. 


let num = [1,6,34,80,5]

for(let i = 0; i < num.length; i++ ){
    console.log(`At index ${i} we have number ${num[i]}`);
    
}



// 3. Write a function that checks if a number is even or odd. 

function numCheck(input){

    if(input % 2 === 0){
        console.log(`${input}, is a even number`);
    }else{
        console.log(`${input}, is a odd number`);
        
    }

}

numCheck(8);



// 4.  Create an object with properties name, age, and city, then log each property.

let info = {
    name: "Peter",
    age: 14,
    city: "Jos"
}

console.log(info.name);
console.log(info.age);
console.log(info.city);



// 5. Write a function that returns the sum of two numbers.

function sum(num1, num2){

    let sum =  num1 + num2

    console.log(sum);
    

}

sum(2,5);



// 6. Write a program that reverses a string.

function reverse(inputStr){
    return inputStr.split('').reverse().join('');
}

console.log(reverse("hello"));



// 7. Create a function that finds the largest number in an array.

function largestNumFind(arr){
    if (arr.length === 0) 
    return "Array is empty";

    return Math.max(...arr);
}

console.log(largestNumFind([1,5,9,50,30,67,92,3,7]));



// 8.  Write a function that converts Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {

    return celsius * (9 / 5) + 32;
  }

console.log(celsiusToFahrenheit(30));



// 9. Create a function that checks if a number is prime.

function primeCheck(input){

     if(input % 2 === 0){
        console.log(`${input}, is not a prime number`);
    }else{
        console.log(`${input}, is a prime number`);
        
    }
    
}


primeCheck(13)



// 10.  Write a function that returns the length of a string.

function stringLength(str){

 for(let i = 0; i <= str.length; i++){
    console.log(`String length is ${str.length}`);
    break
 }
 
    
}

stringLength("Hello World");



// 11. Create a function that multiplies all elements in an array.

function arrayMultiplies(arr) {
    let result = 1;
  
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i];
    }
  
    return result;
  }
  
  console.log(arrayMultiplies([2, 5, 2])); 



  // 12. Write a function that returns the last element of an array.

  function lastElement(array){
    let last = array.length - 1
    for(let i = 0; i < array.length; i++){
        console.log(array[last]);
        break
        
    }
  }

  lastElement([1,2,3,45]);



// 13. Create a function that returns true if a number is divisible by 3 and 5.

function divisibleCheck(input){

    if(input % 3 === 0 && input % 5 === 0){
        return true
    }else{
        return false
    }
}

console.log(divisibleCheck(15));



// 14. Write a function that removes the first element from an array.

function removeFirst(arr){

    let remove = arr.splice(0,1)
    if(arr == arr){
        remove
        return arr
    }
    
}

console.log(removeFirst([1,2,3,4,5]));



// 15. Write a program that adds all numbers from 1 to n using a loop.

function sumLoop(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    return sum;
  }

 console.log( sumLoop(4));



// 16. Write a function that returns the smallest number in an array.
 
function smallNum(arr){

    if (arr.length === 0) 
        return "Array is empty";
    
        return Math.min(...arr);
    
}

console.log(smallNum([3,5,8,99,65]));



// 17. Create a function that returns the difference between two numbers.

function difference(num1, num2){

    let differences = num1 - num2

    return differences
}

console.log(difference(10,4));



// 18. Write a function that joins all elements of an array into a string.

function joinStr(){
    
}
// function farheit (value){
//     return (5/9)* (value-32)


// }


// function btn (){

//     var x = prompt("enter your number")
//     document.getElementById("demo").innerHTML=farheit(x);
// }




// task2

// var obj ={
//     name: "shahzaib",
//     father: 123,


// };
// delete obj.name;

// var x = obj.name;

// console.log(obj)


// task3


// function dte(){
//    return document.getElementById("demo").innerHTML=Date()
// }


// Task4
  // var string = "my name is shahzaib siraj"
  // var str2 = "sharjil"

// var x = string.indexOf("name");
// var length = string.length
// console.log(x)
// // console.log(length )


// var y = string.lastIndexOf("name");

// console.log(y)
// var z = string.slice(0,7);
// console.log(z);

// console.log(string.toLowerCase())

// console.log(string.concat(str2))

// console.log(string.charAt(5))

// console.log(string[8])




// task3

// var string = "my name is shahzaib siraj"

// console.log(Array.isArray(string))

//  task4

// var string = ["shahzain","sharjil" , "naveed"]

// console.log(string.toString())

//1 console.log(document.URL)



//2 filename = "system.php"
// // console.log(filename.split('.').pop());

// var ext = filename.split(".").pop();
// // console.log(ext)
// filename = "abc,js"
// console.log(filename.split(',').pop())





// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.




// function difference(n) {
//   if (n <= 13)
//     return 13 - n;
//   else
//     return (n - 13) * 2;
// }
// console.log(difference(32))
// console.log(difference(11))


// // task4

// function Star(name,fname,age,name){
//   this.name = name
//   this.fname = fname
//   this.age = age,
//   this.like = function(user){
//     console.log(`${user} liked ${this.name}`)
//   }

// }

// var star1 = new Star("shahzaib","M.siraj",22,"shahzaib");
// console.log(star1)

// console.log(star1.like(star1.name))



// tak5
// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back


// function front_back(str) {
//   first = str.substring(0, 1);
//   return first + str + first;
// }
// console.log(front_back('a'));
// console.log(front_back('ab'));


// Write a JavaScript program to create a new string adding "Py" in front of a given string.If the given string begins with "Py" then return the original string.
// function string_check(str1) {
//   if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
//     return str1;
//   }
//   return `Py${str1}`;
// }

// console.log(string_check(""));
// console.log(string_check("thon"));

// function string_check(str){
//   if(str==null|| str === undefined|| str.substring(0,2) === "py"){
//     return str
//   }
//   return 'py${str}';
// }
// console.log(string_check("python"))
// console.log(string_check(thon))


// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// function remove_character(str, char_pos) {
//   part1 = str.substring(0, char_pos);
//   part2 = str.substring(char_pos + 1, str.length);
//   return (part1 + part2);
// }

// console.log(remove_character("Python", 0));
// console.log(remove_character("Python", 3));
// console.log(remove_character("Python", 5));




// Write a JavaScript program to create a new string from a given string changing the position of first and last characters.The string length must be greater than or equal to 1.

//////??????/////
// function first_last(str1) {
//   if (str1.length <= 1) {
//     return str1;
//   }
//   mid_char = str1.substring(1, str1.length - 1);
//   return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
// }
// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('abc'));

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
// function test37(x) {
//   if (x % 3 == 0 || x % 7 == 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(test37(12));
// console.log(test37(14));
// console.log(test37(10));
// console.log(test37(11));


// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back.The string length must be 3 or more.


// function front_back3(str) {
//   if (str.length >= 3) {
//     str_len = 3;

//     back = str.substring(str.length - 3);
//     return back + str + back;
//   }
//   else
//     return false;
// }
// console.log(front_back3("abc"));
// console.log(front_back3("ab"));
// console.log(front_back3("abcd"));


// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back.The string length must be 3 or more.

// function front_back(str){
// if(str.length>=3){
//   back = str.substring(str.length-3)
//   return back+str+back
// } else{
//   return false
// }
// }

// console.log(front_back("shahzaib"));
// console.log(front_back("ss"));
// console.log(front_back("shas"));

// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.


// function check_java(str){
//   if(str.substring(0,4)=="java"){
//     return true
//   } else{
//     return false
//   }
// }

// console.log(check_java("javascript"))

// task28

// Write a JavaScript program to check whether two given integer values are in the range 50..99(inclusive).Return true if either of them are in the said range.


// function check_numbers(x, y) {
//   if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(check_numbers(12, 101));
// console.log(check_numbers(52, 80));
// console.log(check_numbers(15, 99));



// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function near_100(x, y) {
//   if (x != y)
//   {
//   x1 = Math.abs(x - 100);
//   y1 = Math.abs(y - 100);

//   if (x1 < y1)
//   {
//     return x;
//   }
//   if (y1 < x1)
//   {
//     return y;
//   }
//   return 0;
//   }
//   else
//     return false;
// }

// console.log(near_100(90, 89));
// console.log(near_100(-90, -89));
// // console.log(near_100(90, 90));

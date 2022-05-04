# Javascript documentation with respect to video reference #

<a href="https://www.youtube.com/watch?v=PkZNo7MFNFg"> Click me to vist the reference video </a>

# commenting in Js files # 

* The lines will not be executed by the compiler.

* Use // => for inline commenting.

* Use /* ... */ => For multiline commenting.

* EX:

```javascript
console.log("hi");

// console.log("hello");  inline comment not executed.


//multiline comment (Not executed)
/*
bhcbcdbjc
 bhcbbc historychbhbhj
 cbhsdcbbdsc
 */
```
* Output:

```javascript
hi
```
# Variables # 

* Variables are used to store data in memory.We can store any kind of data using variables.

* In javascript,We use three kind of variables for assigining data.

  * var
  * let
  * cost

 ## Ex:1 var ## 

 ```javascript
//var  
// 1) We can declare variables globally.
// 2) we can reassign values with var keyword.
var a = "vijay";
console.log(a);
a=10;
console.log(a);

 ```
* Output:

```javascript
vijay
10
```
 ## Ex:2 let ## 

 ```javascript
//let
// 1) We can use it for specific scope not for global usage
// 2) We can reassign the value using let
let b=20;
console.log(b)

b="hi";
console.log(b);
 ```
* Output:

```javascript
20
hi
```
 ## Ex:3 const ## 

 * This must be used with initialisation and  should not used for reassignning.

 ```javascript

//const

//  1) We must use declare a variable with it's value in same line in const keyword

const c = 10;
console.log(c);

// 2) We cannot reassign the const value (It will throe declartion error)
 ```
* Output:

```javascript
10
```
# Storing values with assignment operator (=) #

* =  --> This opeartor assigns the right side value to left side variable.

* EX: var a="Vijay";  --> Here, "vijay" stirng value is assigned to the  a variable.

# Operators #

## Basic operators ##

```javascript
//addition 

let a=10+20; 
console.log(a);

//subtraction

let b=10+20; 
console.log(b);

//mutiplication  * astreit symbol

let c=10*20; 
console.log(c);

//division

let d=10/20; 
console.log(d);

//modulas or remainder

let e=10%20; 
console.log(e);


//Increament

let f=10;
f++;
console.log(f);

//Decreament

let g=10;
g--;
console.log(g);

```
* Output:

```javascript
30
30
200
0.5
10
11
9
```
## Compound assignments ##

```javascript
//addition 

let a =10;
a += 20;
console.log(a);

//subtraction

let b =10;
b -= 20;
console.log(b);

//Multiplication

let c=10;
c *= 20;
console.log(c);

//Division

let d=10;
d /= 20;
console.log(d);

//modulas

let e=10;
e %= 20;
console.log(e);
```
* Output:

```javascript
30
-10
200
0.5
10
```
# String #

## String declaration ##

* We should declare inside "" or ''.

## Escape sequence in string ##

* There are some escapse sequences that  is not considered within string. They are:
  * \n --> new line
  * \b -->backspace
  * \f --> form control 

* Ex:

```javascript
//Using \n
let string ="I am vijay \nI am arun";
console.log(string);

//Using \b

let a = "Hii\b hello";
console.log(a);

//Using \f

let b="Welcome \fgood morning";
console.log(b);
```

* Output:

```javascript
I am vijay 
I am arun
Hi hello
Welcome 
        good morning
```
## string Immutability ##

* They cannot be altered once created.

### Example ###

```javascript
//correct method to alter string
// Use to change the whole string
let a ="Bi";
a = "Hi";
console.log(a);

//Wrong method to alter string

let b="bi";
b[0]='h';
console.log(b);   //Not change
```
* Output:

```javascript
Hi
bi
```
## string length ##

* To find string length , Use stringnmae.length method.

* We can also find letters in string using length method

### Example ###

```javascript
// length

let a = "Hi i am vijay";
console.log(a.length);


//find first letter

let b = "vijay";
console.log(b[0]);

//find Nth letter

let c = "Good morinig";
console.log(c[8]);

//find last letter in large string
let d="ajnsdhvdchjdcbndcdcbz";
console.log(d[d.length-1]);

//find N'th last letter in string
let e="bcsdbcjdbbcnjkbjDFGbsh8";
console.log(e[e.length-2]);
```
* Output:

```javascript
13
v
i
z
h
```
## string concatination ##
 * We can merge two strings using + operator and += operator.

 ### Example ###

```javascript
//Using +
let a = "I am";
let b = "vijay";
console.log(a  + " " +  b );

//Using +=
let c="He is";
c += " Vikram";
console.log(c);
```
* Output:

```javascript
I am vijay
He is Vikram
```
## String constructing with varibles ##

* we can assign strings to variables and use the variables in another string.

### Example: Word blank program ###

```javascript
function wordBlank(noun,adjective,verb,adverb){
    let a ="The" + " " + adjective + " " + noun + " " + verb + " " + adverb + "." ;
    return a;

}
console.log(wordBlank("dog","dirty","ran","fast"));
console.log(wordBlank("cat","beautiful","eat","well"));
```
* Output:

```javascript
The dirty dog ran fast.
The beautiful cat eat well.
```

# Array #

* Array allows us to storevmultiple values using [].
* Elementsv inside array will be seperated by ,
* Elements can be any data type.

```javascript
let a = [1,2,3,"HI",'a',true];
console.log(a);
```
* Output:

```javascript
[ 1, 2, 3, 'HI', 'a', true ]
```

#  Nested Array #

* Arrays inside array also known as multi diamensional array.

```javascript
let nest = [[1,2,3],[4,5,6],[7,8,9,10]];
console.log(nest);
```
* Output:

```javascript
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9, 10 ] ]
```
## Array access elements using [index] ##

* [index] We can access array elements using this bracket notation.

* Array index starts from 0.

* We can access nested array elements using [][] where fisrt []  represents the main array index and next[] represennts the subarray index.

```javascript
let a = [1,2,3,"HI",'a',true];

let nest = [[1,2,3],[4,5,6],[7,8,9,10]];

console.log(a[0]);

console.log(nest[2]);

console.log(nest[0][1]);   // 2      
```
* Output:

```javascript
1
[ 7, 8, 9, 10 ]
2
```
## Array modify elements using [index] ##

* WE can modify or change the elements in the array using [] as below.

### Ex : noramal array ###
```javascript
let normal = [10,20,30,40];
console.log("Before modification:",normal);
normal[3]=80;
console.log("After modification:",normal);
```
* Output:

```javascript
Before modification: [ 10, 20, 30, 40 ]
After modification: [ 10, 20, 30, 80 ]
```

### Ex : Nested array ###

```javascript
//Nested array

let nest = [[1,2,3],["hi","Hello"],[4,5]];
console.log("Before modification:",nest);
nest[2]=['a','b','c'];
console.log("After modification:",nest);
```
* Output:

```javascript
Before modification: [ [ 1, 2, 3 ], [ 'hi', 'Hello' ], [ 4, 5 ] ]
After modification: [ [ 1, 2, 3 ], [ 'hi', 'Hello' ], [ 'a', 'b', 'c' ] ]
```
## Array Manipulation using builtin functions ##

##  1) Adding elements in front using unshift() ##

* It adds elements to the beginning of array using <b>Arrayname.unshift([new element/new array]);  </b>

### Example ###

```javascript
// Normal array
let a = [1,5,78];
console.log("Before unshift:",a);
a.unshift(0);
console.log("After unshift:",a);

//Nested array

let b = [["rice",10],["wheat",5],["mango",10]];
console.log("Before unshift:",b);
b.unshift(["orangr",5]);
console.log("After unshift:",b);
```
* Output:

```javascript
Before unshift: [ 1, 5, 78 ]
After unshift: [ 0, 1, 5, 78 ]
Before unshift: [ [ 'rice', 10 ], [ 'wheat', 5 ], [ 'mango', 10 ] ]
After unshift: [ [ 'orangr', 5 ], [ 'rice', 10 ], [ 'wheat', 5 ], [ 'mango', 10 ] ]
```


## 2) Adding elements in last using push() ##

* It adds elements to the last of array using <b>Arrayname.push([new element/new array]);  </b>

### Example ###

```javascript
// Normal array
let a = [1,5,78];
console.log("Before push:",a);
a.push(100);
console.log("After unshift:",a);

//Nested array

let b = [["rice",10],["wheat",5],["mango",10]];
console.log("Before push:",b);
b.push(["orange",5]);
console.log("After push:",b);
```
* Output:

```javascript
Before push: [ 1, 5, 78 ]
After unshift: [ 1, 5, 78, 100 ]
Before push: [ [ 'rice', 10 ], [ 'wheat', 5 ], [ 'mango', 10 ] ]
After push: [ [ 'rice', 10 ], [ 'wheat', 5 ], [ 'mango', 10 ], [ 'orange', 5 ] ]
```

## 3)  Removing elements in first using shift() ##

* It removes elements from the last of array using <b>Arrayname.shift();  </b>

### Example ###

```javascript
// Normal array
let a = [1,5,78];
console.log("Before shift:",a);
a.shift();
console.log("After shift:",a);

//Nested array

let b = [["rice",10],["wheat",5],["mango",10]];
console.log("Before shift:",b);
b.shift();
console.log("After shift:",b);

```
* Output:

```javascript
Before shift: [ 1, 5, 78 ]
After shift: [ 5, 78 ]
Before shift: [ [ 'rice', 10 ], [ 'wheat', 5 ], [ 'mango', 10 ] ]
After shift: [ [ 'wheat', 5 ], [ 'mango', 10 ] ]
```
## 4)  Removing elements in last using pop() ##

* It removes element in the last of array using <b>Arrayname.pop();  </b>

### Example ###

```javascript
// Normal array
let a = [1,5,78];
console.log("Before pop:",a);
a.pop();
console.log("After pop:",a);

//Nested array

let b = [["rice",10],["wheat",5],["mango",10]];
console.log("Before pop:",b);
b.pop();
console.log("After pop:",b);

```
* Output:

```javascript
Before pop: [ [ 'rice', 10 ], [ 'wheat', 5 ], [ 'mango', 10 ] ]
After pop: [ [ 'rice', 10 ], [ 'wheat', 5 ] ]
```
# Functions # 

* Functions are called mini programs.
* It allows us to create reusabe code.

## Simple function syntax ##

```javascript

function functionName() {

     --- set of statements.--

}

functionNmae();

```
## EX: Simple function to display text ##

```javascript

function show()
{

    console.log("I am simple function example");

}

show();                                      //This is function call  (We can reuse the same function using this call)
```
* Output:

```javascript
I am simple function example
```


## passing values to functions with arguments ##

### Parameters ###

  * parameters are variables that aare placeholders for the values that are to be input to afunction when it is called.

 ### Arguments ### 
  
  * Argumrnts are values that are considered as inputs which is pased during function call.

 ## Syntax for functions with parametrs and arguments ## 

 ```javascript

 function functionName(variable1,variable2)     //This variables are parameters.
 {
      ---Set of staements---
 }

 functionName(value for variable1,value for variable 2);   //This values are arguents.

 ```
 ## EX: functions with arguments and parametrs ## 

 ```javascript
 function add(a,b){
    console.log(a+b);
}
add(10,45);
add(-56,-300);
 ```

 * Output:

 ```javascript
55
-356
 ```

## Global Scope and functions ##

  * Scopr refers to the visiblity of variables.

  * Global scope --> We can use anywhere in the program even in function.

* NOTE: I consoles , the variables declared without any keyword will automatically consider as var keyword.But ,text editrs must require any keyword to      assign variables.

## EX : ##

```javascript
var global = 10;    //Declaring global

function fun1(){

    local=50;           //Declare variable without keyword (Considered as global)

}

function fun2(){

    var output;

    if(typeof global != 'undefined'){
        output="Global:"+global;
    }

    console.log(output);

    if(typeof local != 'undefined'){
        output = "Local:"+ local;
    }

    console.log(output);
    
}

fun1();
fun2();
```
* Output:

```javascript
Global:10
Local:50
```

## Local Scope and functions ##

  * variables declared within the functions will not visible outside of the function.
  * We cannot use thode variables out of the functions .If we try to do it , the reference error will be return.

  ## Example:1 correct method ##

```javascript
function local(){
    var a=67;       //Declaring within function
   
    console.log(a);    //Using within function
}
local();
  ```

* Output:

```javascript
67
```

  ## Example:2 Wrong method ##

```javascript
function local(){
    var a=67;       //Declaring within function
   
    console.log(a);    //Using within function
}
local();

console.log(a);         //Using in global produce error
  ```

* Output:

```javascript
/home/guest/Documents/video/jsvideo/functions/referror.js:8
console.log(a);
            ^

ReferenceError: a is not defined
```

## Global vs Local scope in Functions ##

 * Declaring different variables with same variable names , one as gloal and another one as function local.
 * Then the functional local variable will override the glbal variable. it will be used while calling the function.

 ## Ex: ##

 ```javascript
var same="hi";         // Declaring global

function demo(){

    var same = "Hello";          //Declaring same variable inside function
    return same;
}
console.log(demo());           //Function call return the inside function value
console.log(same);             //global usage will not affect the inside function variable.
 ```
* Output:

```javascript
Hello
hi
```
# Functions with return # 
 * return statement in function returns the some statement to the function call.
## EX : Simple function with return statement ##

```javascript
function fun(num){
    return num*25;
}
console.log(fun(20));
```
* Output:

```javascript
500
```

# Undefined value in return fuctions #
  * There is no compeltion to contain return statement in the functions.
  * Without return in functions will produce undefined while calling the function.
## EX : ##

```javascript
function fun(){
    var sum =0;
    sum += 28;
}
console.log(fun());
```
* Output:

```javascript
undefined
```
## Overcome method : 1 ##
  * To overcome this problem we should use return staement inside the function.

```javascript
function fun(){
    var sum=0;
    sum +=89;
    return sum;
}
console.log(fun());
  ```
* Output:
```javascript
89
```
## Overcome method : 2 ##
  * To overcome this problem we should use return or consle.log for the variable sum inside the function.

```javascript
function fun(){
    var sum =0;
    sum +=28;
    console.log(sum);
}
fun();
  ```
* Output:
```javascript
28
```

# Assignment variables for returned value #
 * We can assign the return statement vaues to avariable by assigning a variable to the function call.

```javascript
function math(a,b){
    var value=1;
    return (value*10)+a+b ;
}
 let res=math(2,5);
 console.log(res);
```

* Output:

```javascript
17
```

# JSON>stringify() #
 * JSON>stringify converts mostly objects and arrays to string.

 ## EX: ##

 ```javascript
 let a = [10,46];
console.log(a);                      //Print as array
console.log(JSON.stringify(a));      //prints as string

let obj = {
    name: "vijay",
    age : 10
}
console.log(obj);                       //prints as object
console.log(JSON.stringify(obj));        //prints as string
 ``` 
* Output:

```javascript
[ 10, 46 ]
[10,46]
{ name: 'vijay', age: 10 }
{"name":"vijay","age":10}
```
# Stand inline #

* It is functionality of queue datastructure.
* Queue datastructure follows first in first out rule.
* This uses nextLine function logic in it.

## EX : inLine function ##
```javascript
var testarr=[1,2,3,4,5];

function nextInline(arr,item){

     arr.push(item);
   return arr.shift();
}
console.log("Before:" + JSON.stringify(testarr));
console.log(nextInline(testarr,6));
console.log("After:"+JSON.stringify(testarr));
```
* Output:

```javascript
guest@stalin:~/Documents/video/jsvideo/standInline$ node inline.js
Before:[1,2,3,4,5]
1
After:[2,3,4,5,6]
```
# Operators # 

## Arithmetic Operators ##
<br>

<img src="images/arithematic.png" alt="Sorry" height="250">

## Assignment Operators ##
<br>

<img src="images/assignment.png" alt="Sorry" height="200">


## String ##
<br>

<img src="images/string.png" alt="" height="200">

## Comparison Opearors ##
<br>


<img src="images/comparison.png" alt="" height="300">
<br>

## Logical Operator  ##
<br>

<img src="images/logical.png" alt="" height="200">

* Logical AND (&&)

* it performs * operation that means,

   
   * 0 0 --> 0
   * 0 1 --> 0
   * 1 0 --> 0
   * 1 1 --> 1

* In other words, If both conditiona are true, only Result is true.

* Logical OR (||)

* it performs + operation that means,

         
   * 0 0 --> 0
   * 0 1 --> 1
   * 1 0 --> 1
   * 1 1 --> 1

* In other words if any one of the condition is true the result is true.

* Logical NOT (!)

     * 0 --> 1
     * 1 --> 0

 * In other words Just opposite.

<br> 

# conditional statements #

# if #

 * Check for the condition inside the brackets , if it is true execute if part otherwise none.

 ## EX: ##

```javascript
function check(a)
{
if(a==100){
    return "IF part executed";
}

}
console.log(check(100));       //condition true means execute if block

console.log(check(25));          //false means print undefined because nothing is defined.
```
* Output:

```javascript
IF part executed
undefined
```




# if-else  #

 * Check for the condition inside the brackets , if it is true execute if part otherwise executes else part.

 ## EX: ##

```javascript
function check(a){
    
    if(a%2==0){
        return "number is even (IF part)"
    }
    else{
        return "Number id odd (ELSE part)"
    }
}
console.log(check(18));              
console.log(check(105));

```
* Output:

```javascript
number is even (IF part)
Number id odd (ELSE part)
```
# if - else if - else   #

 * Check for the condition inside the brackets , if it is true execute if part otherwise check next condition in elseif if that is true executes elseif part
 otherwise executs else part.

 ## EX: ##

```javascript
function check(a){
    if(a==0){
        return "Number is 0 {IF PART executed}";
    }
    else if(a%2==0){
        return "Number is even {ELSEIF part executed}";
    }
    else{
        return "Number is odd{ELSE part executed}";
    }
}
console.log(check(0));
console.log(check(1));
console.log(check(4886));

```
* Output:

```javascript
Number is 0 {IF PART executed}
Number is odd{ELSE part executed}
Number is even {ELSEIF part executed}
```

# chaining eles if statements   #

 * We can use more than one else if statements acoording to the conditions required.
 * But we should focus on the procedence of conditions that we use.

 ## EX: ##

```javascript
function check(marks){
    if(marks>=90){
        return "O grade \n Outstanding{ IF }"
    }
    else if( marks>=80 && marks<90 ){
        return "A+ grade \n excellent { 1 st ELSEIF}";
    }
    else if(marks>=70 && marks<80 ){
        return "A grade \n very good{ 2 nd ELSEIF }";
    }
    else if(marks>=60 && marks<70 ){
        return "B+ grade \n Good{ 3 rd ELSEIF }";
    }
    else if(marks>=50 && marks<60 ){
        return "B grade \n Need to improve more { 4 th ELSEIF }";
    }
    else{
        return "FAIL \n GOOD LUCK NEXTTIME{ ELSE }";
   
    }

}

console.log(check(0));
console.log(check(50));
console.log(check(65));
console.log(check(70));
console.log(check(81));
console.log(check(100));

```
* Output:

```javascript
FAIL 
 GOOD LUCK NEXTTIME{ ELSE }
B grade 
 Need to improve more { 4 th ELSEIF }
B+ grade 
 Good{ 3 rd ELSEIF }
A grade 
 very good{ 2 nd ELSEIF }
A+ grade 
 excellent { 1 st ELSEIF}
O grade 
 Outstanding{ IF }
```

# Golf code programe #

```javascript
var Nickname=["Hole-in-one","eagle","Birdie","Par","Bogey","Double bogey","Go home"];
function golf(par,stroke){
    if(stroke==1){
        return Nickname[0];
    }
    else if( stroke <= par-2 ){
        return Nickname[1];
    }
    else if( stroke == par-1 ){
        return Nickname[2];
    }
    else if( stroke == par ){
        return Nickname[3];
    }
    else if( stroke == par+1 ){
            return Nickname[3];
    }
    else if( stroke == par+2 ){
        return Nickname[4];
     }
     else if( stroke >= par+3 ){
        return Nickname[5];
     }

}
console.log(golf(1,1));
console.log(golf(5,8));
console.log(golf(2,2));
console.log(golf(2,4));
```
* Output:

```javascript
 Hole-in-one
Double bogey
Par
Bogey
 ```
# Switch statements #

* Switch statements usually helpful for checking multiple conditions.
* It is more easy to understand and simple than nested if-else statements.
* Mainly it is used for menu and operatioj according to the selected menu.
* Always set switch ( true )  if there is more than comparison operation.
* break keyword is compulsary for every case otherwise it executes all the cases provided.
* use default keyword to display the error message usually.There is not compulsion to use default as last,we can use it anywhere. 

## Syntax for switch statements ##

 ```javascript
 switch(condition){
   case 1:
     set of statements;
     break;
   case 2:
     set of statements;
     break;  
   case 3:
     set of statements;
     break; 
     ...
   case N:
     set of statements;
     break;   
   default:
     display error message;
     break;  

 }
 ```

##  EX:1  Simple comparitive in switch ##

```javascript
function com(a){
    var display;
    switch(a){
        case 1:
            display="a is equal  to 1";
            break;
        case 2:
            display="a is equal to  2";
            break;    
        case 3:
            display="a is equal to 3";
            break;   
        default:
            display="a is not 1 , 2 ,3 ";      
    }
    return display;
    
}
console.log(com(1));
console.log(com(2));
console.log(com(3));
console.log(com(89));
```

* Output:

```javascript
a is equal  to 1
a is equal to  2
a is equal to 3
a is not 1 , 2 ,3 
```

## EX:2: Minicalci program ##

```javascript

    let choose;
    console.log(" 1.addition \n 2.subtraction \n 3.Mutiplication \n 4.division");
    function calci(choose,a,b){
    switch(choose){
        case 1:
            res=a+b;
            console.log("Addition of "+ a + " and " + b + " is : " + res);
            break;
        case 2:
              res=a-b;
              console.log("Subtraction  of "+ a + " and " + b + " is : " + res);
            break; 
        case 3:
            res=a*b;   
            console.log("Multiplication  of "+ a + " and " + b + " is : " + res);
           break;     
        case 4:
            res=a/b;
            console.log("division quatient  of "+ a + " and " + b + " is : " + res);
            break;  
        default:
            console.log( " Wrong input ");    
            break;
    }

    }
    calci(1,10,67);
    calci(2,67,879);
    calci(3,670,879);
    calci(4,60,89);

```

* Output:

```javascript
  1.addition 
 2.subtraction 
 3.Mutiplication 
 4.division
Addition of 10 and 67 is : 77
Subtraction  of 67 and 879 is : -812
Multiplication  of 670 and 879 is : 588930
division quatient  of 60 and 89 is : 0.6741573033707865
```
## Returning boolean values from function  ##

 * All conditional statemets usually return the boolean values true or false.

 ```javascript
 function boolean(a,b){
    return a==b;
}
console.log(boolean(10,56));
console.log(boolean(10,10));
 ```
* Output:

```javascript
false
true
```

## Early return in functions ##

* The function is terminated when it meets the return.

```javascript
function demo(a,b){
    
        return  a+b;    //eary return executes and produce output
        return a-b;       //this is omitted

}
console.log(demo(1,8));
```

* Output:

```javascript
9
```
## CArd count ##
```javascript
function card(value){
    var count=0;
    switch(value){
        case 2:
        case 3:
        case 4:    
        case 5:   
        case 6:   
        case 7:   
           count++;
           break; 
        case 8:
        case 9:
        case 10:
           count=count;
           break;
        case "J":   
        case "Q": 
        case "K": 
        case "A":    
             count-- ;
             break;
    }
var result;
if(count>=0){
    result="Hold";
}
else{
    result="Bet";
}
return "count is " + count + " " + " So Need to " + result;


}
console.log(card(2));
console.log(card("A"));
console.log(card(0));
console.log(card("Q"));
```
* Output:

```javascript
count is 1  So Need to Hold
count is -1  So Need to Bet
count is 0  So Need to Hold
count is -1  So Need to Bet
```

# Objects #

* Objects are similar to arrays which is alsi used to store multiple value with different datatypes.
* Objects contains properties and values within it.
* It is denoted with {}.

## Sample object ##

```javascript
let family = {
    name : "Vijay",
    Mother:"Ponni",
    Father:"Subramani",
    age:20,
    Village:"Valrasaplayam"
}
console.log(family);
```
* Output:

```javascript
{
  name: 'Vijay',
  Mother: 'Ponni',
  Father: 'Subramani',
  age: 20,
  Village: 'Valrasaplayam'
}
```

















































































































































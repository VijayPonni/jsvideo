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
































































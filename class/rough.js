function foo(a) { 
 
 var b = a;
    a++;
    return a;
}
foo(1);
console.log(typeof a, typeof b);
console.log(b);
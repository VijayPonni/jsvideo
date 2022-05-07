let obj = {
    num : 45,
    num2 : 56
}
console.log(obj);

function add(para)
{
return para.num+ para.num2;
}

console.log(add(obj));


//destructing method

let object = {
    a : 1,
    b : 2
}
console.log(object);

const demo = (function(){
    return function demo( {a,b } ){
         return a + b;
    }
})();
console.log(demo(object));
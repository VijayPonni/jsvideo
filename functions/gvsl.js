var same="hi";         // Declaring global

function demo(){

    var same = "Hello";          //Declaring same variable inside function
    return same;
}
console.log(demo());           //Function call return the inside function value
console.log(same);             //global usage will not affect the inside function variable.
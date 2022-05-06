let global = "I am global";

function check(){
    let variable = "Inside Function ";     //Declared inside function
    console.log(variable);                 // accessing inside function worked
}
check();

console.log(variable);                   //Accessing outsde function not worked
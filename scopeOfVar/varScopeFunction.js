var global=56;

function check(){
    var variable = "I am inside function";   //declaring inside function
    console.log(variable);                    //Using inside function accepted
}
check();


console.log(variable);           //Using globally not accepted throws error

if(1){
    console.log(variable);            //Using in another scope out of function not accepted throws error
} 


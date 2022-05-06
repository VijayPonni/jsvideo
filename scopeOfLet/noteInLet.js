let same="I am global variable of let";    //declared in gobal 
console.log(same);                          //Using in global  produce global value

if(1){
    let same = "I am block variable of let";    //declared and reassign in block
    console.log(same);                           //Using inside block will only utilize the reassigned value
}

function check(){
    let same = "I am function variable of let";    //declared and reassign in function
    console.log(same);                             //Using inside function will only utilize the reassigned value
}
check();


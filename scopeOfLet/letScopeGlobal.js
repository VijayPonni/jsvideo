let global = "I am global";   //Declared globally

console.log(global);     //Using globally accepted

if(1){
    console.log(global);     //Using inside block accepted
}

function check(){
    console.log(global);     //Using inside function accepted
}
check();
var global = 45;  //declared globally

console.log(global);      //global use   accepted

if(1){
    console.log(global);     //block use  accepted
}

function check(){
    console.log(global);     //function use  accepted
}
check();
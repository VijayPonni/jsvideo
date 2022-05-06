
var global=10;

if(1){
    var block = "I am block";     // declaring inside block
    console.log(block);
    

}
console.log(block);     //Using in global accepted

function check(){
    console.log(block);    //using inside function accepted
   }
check();

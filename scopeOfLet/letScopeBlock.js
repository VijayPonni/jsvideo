let global="global";

if(1){
    let block = "I am block";     //Declared inside block
    console.log(block);            //Accessing inside  block is accepted
}

console.log(block);           // Accessing in global is not accepted

function check(){
  console.log(block);               // Accessing in function is not accepted
}
check();


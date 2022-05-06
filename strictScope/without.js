var name = "vijay";
var age =10;
if(1){
    gender = "male";     //it is not declared with any keyword but it worked inside scope
    console.log(gender);
}

function check(){
    favourite = "books";
    console.log(favourite);    //it is not declared with any keyword but it worked inside scope
}
check();
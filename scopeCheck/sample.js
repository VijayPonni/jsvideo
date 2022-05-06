function checkScope(){
    "use strict";
    var i = "function scope";
    if(true){
         var  i = "block scope";
        console.log("Block Scope is : " , i );
    }
    console.log("Function scope i is : " , i );
    return i;
}
checkScope();


function checkScope2(){
    "use strict";
    let i = "function scope";

    if(true){
        let i = "block scope";
        console.log("Block Scope is : " , i );
    }
    console.log("Function scope i is : " , i );
    return i;
}
checkScope2();
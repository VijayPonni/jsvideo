var global = 10;    //Declaring global

function fun1(){

    local=50;           //Declare variable without keyword (Considered as global)

}

function fun2(){

    var output;

    if(typeof global != 'undefined'){
        output="Global:"+global;
    }

    console.log(output);

    if(typeof local != 'undefined'){
        output = "Local:"+ local;
    }

    console.log(output);

}

fun1();
//fun2();
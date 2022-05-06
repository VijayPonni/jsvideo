const ARRAY  = [1,3,5];

function edit(){
    "use strict";
    ARRAY[0]=2;
    ARRAY[1]=4;
    ARRAY[2]=6;
    ARRAY[3]=8;

    return ARRAY;
}
console.log(edit());
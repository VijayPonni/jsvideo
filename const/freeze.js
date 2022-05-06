function demo(){
    "use strict";
    const MATH_CONST ={
        PI : 3.14
    };
    Object.freeze(MATH_CONST);


     try{
         MATH_CONST.Pi = 66;

     }catch( ex )
     {
         console.log(ex);
     }
    return MATH_CONST.Pi;
}

console.log(demo());
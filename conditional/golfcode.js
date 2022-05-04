var Nickname=["Hole-in-one","eagle","Birdie","Par","Bogey","Double bogey","Go home"];
function golf(par,stroke){
    if(stroke==1){
        return Nickname[0];
    }
    else if( stroke <= par-2 ){
        return Nickname[1];
    }
    else if( stroke == par-1 ){
        return Nickname[2];
    }
    else if( stroke == par ){
        return Nickname[3];
    }
    else if( stroke == par+1 ){
            return Nickname[3];
    }
    else if( stroke == par+2 ){
        return Nickname[4];
     }
     else if( stroke >= par+3 ){
        return Nickname[5];
     }

}
console.log(golf(1,1));
console.log(golf(5,8));
console.log(golf(2,2));
console.log(golf(2,4));
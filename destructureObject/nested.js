let temp = {
    Monday : { max : 93 , min : 88 },
    Tuesday : { max : 95 , min : 80 }
} 
console.log(temp);

function forcastOfToday(tempToday){

   const { Monday : { max : high , min : low }} =  tempToday

    console.log("Today FORCAST :");
    console.log("Expected High: " + high + "\n "+ "Expected Low : " + low);
}
forcastOfToday(temp);
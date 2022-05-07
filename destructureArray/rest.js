const arr = [1,2,3,4,5];

function lastTWo(){
    const[a,b,c,...rest] = arr;
    return rest;

}
console.log("Before : ", arr);
console.log("After : ", lastTWo());
function range(min,max){
    return Math.floor(Math.random() *  (max - min + 1)) + min;
}
console.log(range(2,16));
console.log(range(6,100));
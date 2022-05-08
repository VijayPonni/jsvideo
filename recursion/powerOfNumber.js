function powerOfNumber(x,n){
    if(n==1){
        return x;
    }
    else{
        return x * Math.pow(x,n-1);
    }

}
console.log(powerOfNumber(2,1));
console.log(powerOfNumber(3,3));

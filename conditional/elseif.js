function check(a){
    if(a==0){
        return "Number is 0 {IF PART executed}";
    }
    else if(a%2==0){
        return "Number is even {ELSEIF part executed}";
    }
    else{
        return "Number is odd{ELSE part executed}";
    }
}
console.log(check(0));
console.log(check(1));
console.log(check(4886));
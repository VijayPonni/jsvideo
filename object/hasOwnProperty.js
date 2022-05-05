function check(value){
    var res;
    let obj = {
        1 : "v1",
        2 : "v2",
        "hi": 675,
    }
    res = obj[value];
    if(obj.hasOwnProperty(value)){
        return "Yes here it is :"+obj[value];
    }
    else{
        return "No"
    }
}
console.log(check(1));
console.log(check(5));
console.log(check("hello"));
console.log(check("hi"));
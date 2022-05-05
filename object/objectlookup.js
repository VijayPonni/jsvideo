function lookup(value){
    var res;
let dic = {
    "apple" : "A fruit",
    "Bring" : "fetch",
    "cat"   : "An small animal",
    "dig"   : "dig"
};
res=dic[value];
return res;

}
console.log(lookup("apple"));
console.log(lookup("cat"));
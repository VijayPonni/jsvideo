
function show(){


class vegetable {
    constructor(name){
        this.name=name;
    }
}
return vegetable;
}

let func = show();

let veg = new func("petroot");

console.log(veg.name);




let display = {
    name : "vijay",
    age:47
}

function showName(){
    console.log(this.name,this.age);
}

let functionBind = showName.bind(display);
functionBind();
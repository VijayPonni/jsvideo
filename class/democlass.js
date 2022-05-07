class family {
    constructor(name ,age){
        this.name =name,
        this.age = age

    }
    method(text){
        return text;
    }
}

const show = new family("vijay",89);
console.log(show);
console.log(show.method("Brilliant vijay"));
let pet = {
   
eats : true
};

let dog =Object.create(pet);

console.log(dog.eats);

console.log(Object.getPrototypeOf(dog)===pet);
Object.setPrototypeOf(dog,{})
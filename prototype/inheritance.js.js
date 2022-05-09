let dog = {
  name : "tom"
}

let cat = {
    healthy : "no"
}

cat.proto= dog;

console.log(cat.healthy);
console.log(cat.name);   //not work outdated method
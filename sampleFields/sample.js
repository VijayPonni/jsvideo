console.log("Before simplifying : \n");
function demo(name ,age ){
     return {
         name : name,
         age : age
     }

}
console.log(demo("Vijay",20));

console.log("\n");
console.log("After Simplifying:\n");

 let demo2 = (name ,age ) =>   ( {name ,age } ) ;
  
console.log(demo2("Vijay",20));




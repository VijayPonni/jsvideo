let  object = {
    a : 56,
    b : 78,
    c : 678
}
console.log(object);

 const { a : x , b :y , c:z } = object;  // NOTE : DON't use : object = const {   } like thay.(It will show error)

 console.log(x,y,z);
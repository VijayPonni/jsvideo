let array = [1,2,3];
console.log(array);

const [a,,c]=array;
console.log(a,c);

let x=10;
let y=20;
console.log("Befor Switching : x and y: ", x,y);
swap = () => {
     [x,y] = [y,x] ;
     console.log("After Switching : x and y : " , x ,y);
}
swap();

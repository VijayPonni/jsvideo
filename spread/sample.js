const arr1=['Jan','Feb','Mar'];

arr2=[];

function get(arr2)
{
   return arr2=[arr2,...arr1];
}
console.log(get("ji"));
console.log(get(78));

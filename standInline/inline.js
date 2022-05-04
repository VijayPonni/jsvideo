var testarr=[1,2,3,4,5];

function nextInline(arr,item){

     arr.push(item);
   return arr.shift();
}
console.log("Before:" + JSON.stringify(testarr));
console.log(nextInline(testarr,6));
console.log("After:"+JSON.stringify(testarr));



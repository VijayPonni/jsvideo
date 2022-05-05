
function mul(arr){
    let res=1;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
        res *= arr[i][j];
        }
      }
console.log(res);
}
mul([[1,1,36],[1,7],[10,78]]);
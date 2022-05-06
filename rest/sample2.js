
function sum(...args){
     return args.reduce((a,b) => a+b,0)
};
console.log(sum(1,4,6,78));
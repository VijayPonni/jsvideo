const array =["Vijay","Surya"];

const gap = function(array){
    return  " "+array+" ";

 }

const display = function (array,init){
    const final =[];
    for(let i=0;i<array.length;i++){
        final.push(init(array[i]));
    }
   return final;

}


console.log(display(array,gap));

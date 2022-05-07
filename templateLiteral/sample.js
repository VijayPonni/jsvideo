let obj = {

    first : ["number1","number2"],
    second : ["String1","String2"] ,
    third : ["array1","Array2"]

}


function displayWithTemplate(arr){
   
     let  res=[];
    for(let i=0;i<arr.length;i++){
       
        res.push(`<li class="text-warning"> ${arr[i]}`);
    }
    return res;

}
console.log(displayWithTemplate(obj.first));
console.log(displayWithTemplate(obj.second));
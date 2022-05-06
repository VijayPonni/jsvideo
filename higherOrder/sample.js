const radius = [1,4,7];
const diameter = function(radius){
     return  radius*2;
} ;

const cal = function (radius,logic) {
    const res=[];
    for(let i=0;i<radius.length;i++){
        res.push(logic(radius[i]));
    }
    return res;
}

const zero = function(radius){
    return radius - radius;

};

console.log(cal(radius,diameter));

console.log(cal(radius,zero));
let array = [
    {
        p1 : "Value",
        p2 : "value",
        p3 : [
            1,2,3
        ],
        
    },
    {
        p21 : "Value1",
        p22 : "value2",
        p23 : [
            1,2,3,'j'
        ],
        
    },
];
//access object proprties 

console.log(array[1].p23);
console.log(array[1].p23[3]);
console.log(array[0]["p1"]);
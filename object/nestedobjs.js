let obj = {
    nested : {
        n1: "Value",
        n1a : "Value",
    },
    normal1 : 2,
    normal2: 5,
}

console.log(obj.nested.n1a);
console.log(obj["nested"]["n1"]);

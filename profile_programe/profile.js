var contacts = [
    {
        "name" : "A",
        "Number" : "1234567890",
        "Likes" : ["book","food"]
    },
    {
        "name" : "B",
        "Number" : "4563782903",
        "Likes" : ["swim"]
    },
    {
        "name" : "C",
        "Number" : "6428105424",
     
    },
]

function pro(name,prop){
    for(let i=0;i<contacts.length;i++){
        if(contacts[i].name===name){
        return contacts[i][prop] || "No such property"
    }
}
  return "No such contact";
}

console.log(pro("A","Number"));
console.log(pro("B","Likes"));
console.log(pro("D"));
console.log(pro("C","Likes"));
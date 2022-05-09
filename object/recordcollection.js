var collection = {
    "1" : {
        "Name": "vijay",
        "Things": ["bag,shirt"],
    } ,
    "2" : {
        "Name": "Surya",
        "age": 22,
        "Things": ["bag,shirt","purse"],
    } ,
    "3" : {
        "Name": "kumar",
      
    } ,
    

}

var copy = JSON.parse(JSON.stringify(collection ));

function update(id,prop,value){
    if(value===""){
        delete collection[id][prop];
    }
    else if(prop==="Things"){
        collection [id][prop] =  collection [id][prop] || [];
        collection [id][prop].push(value);
    }
    

    else {
        
        collection[id][prop]= value;
        }
      

    
      return collection;
}
update("1","Name","");
update("2","Name","Ashwin");
update("3","Name","jo");
update("3","Things","['a bag','a plate']");
console.log("Original data :\n",copy);
console.log("Updated data :\n",collection);




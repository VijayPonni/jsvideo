function com(a){
    var display;
    switch(a){
        case 1:
            display="a is equal  to 1";
            break;
        case 2:
            display="a is equal to  2";
            break;    
        case 3:
            display="a is equal to 3";
            break;   
        default:
            display="a is not 1 , 2 ,3 ";      
    }
    return display;
    
}
console.log(com(1));
console.log(com(2));
console.log(com(3));
console.log(com(89));

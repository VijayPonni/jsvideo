function card(value){
    var count=0;
    switch(value){
        case 2:
        case 3:
        case 4:    
        case 5:   
        case 6:   
        case 7:   
           count++;
           break; 
        case 8:
        case 9:
        case 10:
           count=count;
           break;
        case "J":   
        case "Q": 
        case "K": 
        case "A":    
             count-- ;
             break;
    }
var result;
if(count>=0){
    result="Hold";
}
else{
    result="Bet";
}
return "count is " + count + " " + " So Need to " + result;


}
console.log(card(2));
console.log(card("A"));
console.log(card(0));
console.log(card("Q"));

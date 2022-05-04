
    let choose;
    console.log(" 1.addition \n 2.subtraction \n 3.Mutiplication \n 4.division");
    function calci(choose,a,b){
    switch(choose){
        case 1:
            res=a+b;
            console.log("Addition of "+ a + " and " + b + " is : " + res);
            break;
        case 2:
              res=a-b;
              console.log("Subtraction  of "+ a + " and " + b + " is : " + res);
            break; 
        case 3:
            res=a*b;   
            console.log("Multiplication  of "+ a + " and " + b + " is : " + res);
           break;     
        case 4:
            res=a/b;
            console.log("division quatient  of "+ a + " and " + b + " is : " + res);
            break;  
        default:
            console.log( " Wrong input ");    
            break;
    }

    }
    calci(1,10,67);
    calci(2,67,879);
    calci(3,670,879);
    calci(4,60,89);
    


















    
function check(marks){
    if(marks>=90){
        return "O grade \n Outstanding{ IF }"
    }
    else if( marks>=80 && marks<90 ){
        return "A+ grade \n excellent { 1 st ELSEIF}";
    }
    else if(marks>=70 && marks<80 ){
        return "A grade \n very good{ 2 nd ELSEIF }";
    }
    else if(marks>=60 && marks<70 ){
        return "B+ grade \n Good{ 3 rd ELSEIF }";
    }
    else if(marks>=50 && marks<60 ){
        return "B grade \n Need to improve more { 4 th ELSEIF }";
    }
    else{
        return "FAIL \n GOOD LUCK NEXTTIME{ ELSE }";
   
    }

}

console.log(check(0));
console.log(check(50));
console.log(check(65));
console.log(check(70));
console.log(check(81));
console.log(check(100));
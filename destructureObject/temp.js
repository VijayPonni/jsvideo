const AVG_TEMP = {
    Monday : 97.0,
    Tuesday : 91
}
console.log(AVG_TEMP);



function destruct(temp_list){

     const { Monday : Today , Tuesday : Tomorrow }= temp_list;

     console.log(Today,Tomorrow);

}
destruct(AVG_TEMP);
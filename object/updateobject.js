let timetable = {
    monday : "Music class",
    Tuesday : "Dance class",
    Wednesday : "Kungfu class",
    Thursday : "Violin class",
}
console.log( "Object before any updation : \n",timetable);

// Updating value of a existing property

timetable.Wednesday="Singing class";
console.log( "Object After Update new value to existing  property : \n",timetable);

//Updating a property with new value

timetable.Sunday = "Cooking class";
console.log("Object After update new property : \n", timetable);
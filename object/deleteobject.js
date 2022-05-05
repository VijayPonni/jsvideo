var workers = {
    w1 : "Logesh",
    w2: "Vijay",
    w3 : "Vikram"
}

console.log("Before deleting : \n", workers);

delete workers.w1;

console.log("After deleting : \n", workers);

//Delete whole object

delete workers;      //We can't delete whole object

console.log("After deleting the object using delete it still shows the object \n ",workers);     
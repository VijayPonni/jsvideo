let timer = setInterval( () => console.log("hi")  , 2000 );  // it prinys hi for every 2000 millliseconds gap

setTimeout( () => { clearInterval(timer); } , 1000 );  // It stops the execution
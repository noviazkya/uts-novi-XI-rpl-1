function printHello() {
    console.log( "Hello Globals");
 }
 
 // now call above function after 2 seconds
 var timeoutObj = setTimeout(printHello, 2000);
 
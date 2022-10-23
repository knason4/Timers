// Write a function called countdown that accepts a number as a parameter and 
// every 1000 milliseconds decrements the value and console.logs it. 
// Once the value is 0 it should log “DONE!” and stop.



function countDown(number) {
    let n = number;

    const id = setInterval(function () {
        n--;
        if(n == 0) {
            console.log("DONE!");
            clearInterval(id);
        }
        while(n >= 1) {
            return console.log(n);
        }  
    }, 1000);
}


/* 
Write a function called randomGame that selects a random number between 0 
and 1 every 1000 milliseconds and each time that a random number is picked, 
add 1 to a counter. If the number is greater than .75, stop the timer and 
console.log the number of tries it took before we found a number greater than .75.
*/

function randomGame () {
    let counter = 0;
    let randomNumber = 0;
    const id = setInterval(function () {
        randomNumber = Math.random();
        counter++;
        if(randomNumber > 0.75) {
            console.log(counter);
            clearInterval(id);
        }
    }, 1000);

}  
    

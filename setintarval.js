console.log('first')
let seconds = 0;
const timeId = setInterval(() => {
    seconds++;
    console.log(seconds);
    if(seconds >= 10){
        clearInterval(timeId);
    }
}, 1000);

console.log('seconds')
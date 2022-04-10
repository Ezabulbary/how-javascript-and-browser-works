//setTimeout asynchronous javascript
function doSomething(){
    console.log('Do Something')
}

console.log('first')
console.log('second')
console.log('third')
setTimeout(doSomething, 5000);
console.log('forth')
console.log('fifth')
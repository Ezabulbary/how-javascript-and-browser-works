console.log('first')
console.log('second')
console.log('third')
setTimeout(doSomething, 5000);

fetch('https://via.placeholder.com/150')
.then(res => res.json())
.then(data => console.log(data))

console.log('forth')
console.log('fifth')
# to-mils
small module to convert english to milliseconds. 

Specifically designed to be used by `setTimeout()` and `setInterval()`
```js
setTimeout(() =>{
  console.log('Hey!')
}, toMils('10 min'))
```

# Installation
Install with yarn or npm
```
yarn add to-mils
```

# Usage
```js
const toMils = require('to-mils')

console.log(toMils('2 hrs'))
```


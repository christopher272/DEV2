const readline = require('readline-sync');

function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Arguments must be numbers');
    }
    
    return x + y;
    }
    
    try {
    console.log(sum(10, 20)); // 30
    console.log(sum('hello', 20)); // throws error
    } catch (err) {
    console.log('Caught error: ' + err.message);
    }
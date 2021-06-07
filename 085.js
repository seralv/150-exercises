let vec = [1, 5, 6, 8, 3, 5, 2, 4];
let firstPart = [];
let secondPart = [];

for (let i = 0; i < vec.length; i++) {
    
    if ( i % 2 == 0 ) {
        firstPart.push( vec[i] );
    } else {
        secondPart.push( vec[i] );
    }
    
}

console.log('firstPart :>> ', firstPart);
console.log('secondPart :>> ', secondPart);

let sumFirstPart = 0;
firstPart.forEach(element => {
    sumFirstPart += element;
});

let sumSecondPart = 0;
secondPart.forEach(element => {
    sumSecondPart += element;
});

console.log('sumFirstPart :>> ', sumFirstPart);
console.log('sumSecondPart :>> ', sumSecondPart);


let vec = [1, 7, 6, 4, 8, 2, 3, 5, 7, 9];
let newVec = [];
let num = 7;
let rep = 0;

console.log('vec prev :>> ', vec);

for (let i = 0; i < vec.length; i++) {
    
    if ( vec[i] == num ) {
        newVec[i] = rep;
    } else {
        newVec[i] = vec[i];
    }
    
}

console.log('newVec :>> ', newVec);
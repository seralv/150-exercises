let vec = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
let counter = 0;

for (let i = 0; i < vec.length; i++) {
    
    for (let j = 0; j < vec[i].length; j++) {
    
        if ( i != j ) {
            if ( vec[i][j] != 0 ) {
                counter ++;
            }
        }
        
    }
    
}

if ( counter > 0 ) {
    console.log(`The matrix isn't diagonal with ${ counter } value different to zero`);
}
let vec = [1, 2, 3];
let k = 4;
let major = 0;

if ( vec.length < k ) {
    for (let i = 0; i < vec.length; i++) {
        
        if ( vec[i] > major ) {
            major = vec[i];
        }
        
    }
} else {
    for (let j = 0; j < k; j++) {
        
        if ( vec[j] > major ) {
            major = vec[j];
        }
        
    }
}

console.log('Major :>> ', major);
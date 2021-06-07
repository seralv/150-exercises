let v1 = [1, 6, 9, 3, 6];
let v2 = [0, 4, 7, 2, 1];
let num;

for (let i = 0; i < v1.length; i++) {
    
    for (let j = 0; j < v2.length; j++) {
        
        if ( v1[i] == v2[j] ) {
            num = v1[i];
        }
        
    }
    
}

console.log('num :>> ', num);
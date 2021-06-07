let vec = [1, 2, 3, 4, 5, 6, 7];
let aux;

console.log(`vec`, vec);

if ( vec.length % 2 == 0 ) {
    
    for (let i = 0; i < vec.length; i += 2) {
        
        aux = vec[i];
        vec[i] = vec[i+1];
        vec[i+1] = aux;
        
    }

    console.log(`new vec`, vec);

} else {
    console.log(`El vector no es par`);
}


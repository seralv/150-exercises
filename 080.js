let vec = [4, 7, 9, 2, 4, 3];
let aux;

aux = vec[0];
vec[0] = vec[vec.length - 1];
vec[vec.length - 1] = aux;

console.log('vec :>> ', vec);
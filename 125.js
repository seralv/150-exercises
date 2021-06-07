let vec = ['mountain', 'beach', 'landscape', 'sunset'];
let counter = 0;
let point;

for (let i = 0; i < vec.length; i++) {
    
    if ( vec[i].length > counter ) {
        counter = vec[i].length;
        point = i;
    }
    
}

console.log(`The largest word is ${ vec[point] }`);
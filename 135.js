let word = 'abcdabc';
let arr_word = word.split('');
let newWord = [];

for (let i = 0; i < arr_word.length; i++) {

    if ( word.indexOf( arr_word[i] ) === word.lastIndexOf( arr_word[i] ) ) {
        newWord.push( arr_word[i] );
    }
        
}

console.log( newWord.join('') );
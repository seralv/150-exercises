operate = () => {

    let text = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    let words = text.split( ' ' );
    let newText = '';
    
    for (let i = 0; i < words.length; i++) {
        
        newText += words[i][0].toUpperCase() + words[i].substr(1) + ' ';
        // newText += words[i].substr(0, words[i].length - 1) + words[i].substr(words[i].length - 1).toUpperCase() + ' ';
        
    }
    
    h1.innerText = newText;
    console.log('newText :>> ', newText);

}

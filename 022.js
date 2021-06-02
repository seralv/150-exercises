operate = () => {
    let word = document.getElementById( 'number1' ).value;
    let pos = parseInt(document.getElementById( 'number2' ).value);
    const h1 = document.getElementById( 'msg' );
    
    let firstPart = word.substring(0, pos);
    console.log(`firstPart`, firstPart)
    let secondPart = word.substring(pos+1, word.length);
    console.log(`secondPart`, secondPart)
    
    h1.innerText = (firstPart + secondPart);
    console.log(`new word`, firstPart + secondPart);
}

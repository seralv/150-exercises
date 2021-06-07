window.onload = () => {
    const h1 = document.getElementById( 'msg' );
    const h2 = document.getElementById( 'msg2' );
    
    let vec = [];
    for (let i = 0; i < 3; i++) {
        let number = parseInt(prompt( 'Insert a number' ));
        vec.push( number );
    }
    for (let i = 0; i < 3; i++) {
        h1.innerText += vec[i] + ' ';
    }
    let newVec = [];
    
    newVec[0] = vec[2];
    newVec[1] = vec[0];
    newVec[2] = vec[1];
    
    
    for (let i = 0; i < 3; i++) {
        h2.innerText += newVec[i] + ' ';
    }
    console.log('newVec :>> ', newVec);

}

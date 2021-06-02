asignar = () => {
    const user = document.getElementById( 'userVar' ).value;
    this[userVar] = user;
    
    console.log(`userVar`, this[userVar]);

    let h1 = document.createElement('h1')
    h1.textContent = 'La variables es ' + this[userVar];
    document.getElementById( 'app' ).appendChild(h1);

}

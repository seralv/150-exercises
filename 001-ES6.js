var header = document.querySelector('header');

header.addEventListener( 'click', function( e ) {
    console.log( 'Has clickeado en ' + e.target.nodeName );
    e.stopPropagation();
} );

document.addEventListener( 'click', ( e ) => {
    console.log(`Has clickeado en el documento`);
    e.stopPropagation();
} );
var socket = io.connect( 'http://localhost:8080', { 'forceNew': true } );

socket.on( 'messages', function( data ) {
    console.log( data );
    render( data );
} )

function render( data ) {
    var html = data.map( function( elem, index ) {
        return(`<div>
                    <strong>${ elem.author }</strong>:
                    <em>${ elem.text }</em>
                </div>`);
    }).join(' ');
    document.getElementById( 'messages' ).innerHTML = html;
}

function addMessages( e ) {
    var message = {
        author: document.getElementById( 'username' ).nodeValue,
        text: document.getElementById( 'texto' ).value
    };

    socket.emit( 'new-message', message );
    return false;
}
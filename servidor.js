var express = require( 'express' );
var app = express();
var server = require( 'http' ).server( app );
var io = require( 'socket.io' )( server );

var messages = [{
    text: 'Hola soy un mensaje',
    author: 'Carlos Azaustre'
}];

app.use( express.static( 'public' ) );

io.on( 'connection', function( socket ) {
    console.log('Alguien se ha conectado con Sockets');
    socket.emit( 'messages', messages );

    socket.on( 'new-message', function( data ) {
        messages.push( data );

        io.sockets.emit( 'messages', emssages );
    });
} );

server.listen( 8080, function() {
    console.log('Servidor corriendo en http://localhost:8080');
} );
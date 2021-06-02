const element = document.getElementById( 'app' );
const h1 = document.createElement( 'h1' );

const christmasDay = new Date(2021, 11, 25);
let today = new Date();

const counter = Math.floor(( christmasDay - today ) / ( 1000 * 60 * 60 * 24 ));

h1.innerText = `Faltan ${ counter } días para Navidad`;

console.log( 'Faltan ', counter, ' días para Navidad' );

element.appendChild( h1 );
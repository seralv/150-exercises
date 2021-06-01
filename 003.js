
console.log(`//////////////// EXERCISE 3 ////////////////`);

const content = document.getElementById( 'text' );
const one = document.createElement( 'h1' );
const two = document.createElement( 'h1' );
const three = document.createElement( 'h1' );
const four = document.createElement( 'h1' );

one.classList.add( 'text-secondary' );
one.textContent = ("0" + today.getMonth()).slice(-2) + '-' + ("0" + today.getDay()).slice(-2) + '-' + today.getFullYear();
content.append( one );

two.classList.add( 'text-danger' );
two.textContent = ("0" + today.getMonth()).slice(-2) + '/' + ("0" + today.getDay()).slice(-2) + '/' + today.getFullYear();
content.append( two );

three.classList.add( 'text-warning' );
three.textContent = ("0" + today.getDay()).slice(-2) + '-' + ("0" + today.getMonth()).slice(-2) + '-' + today.getFullYear();
content.append( three );

four.classList.add( 'text-info' );
four.textContent = ("0" + today.getDay()).slice(-2) + '/' + ("0" + today.getMonth()).slice(-2) + '/' + today.getFullYear();
content.append( four );
console.log(`//////////////// EXERCISE 1 ////////////////`);

let today = new Date();

let ampm = ( today.getHours() % 12  >= 12 ) ? 'PM' : 'AM';

switch(today.getDay()) {
    case 0:
        console.log( `Today is Sunday` );
        console.log( `${ today.getHours() + ` ` + ampm }:${ today.getMinutes() }:${ today.getSeconds() }` );
        break;
    case 1:
        console.log( `Today is Monday` );
        console.log( `${ today.getHours() + ` ` + ampm }:${ today.getMinutes() }:${ today.getSeconds() }` );
        break;
    case 2:
        console.log( `Today is Tuesday` );
        console.log( `${ today.getHours() + ` ` + ampm }:${ today.getMinutes() }:${ today.getSeconds() }` );
        break;
    case 3:
        console.log( `Today is Wendsday` );
        console.log( `${ today.getHours() + ` ` + ampm }:${ today.getMinutes() }:${ today.getSeconds() }` );
        break;
    case 4:
        console.log( `Today is Thursday` );
        console.log( `${ today.getHours() + ` ` + ampm }:${ today.getMinutes() }:${ today.getSeconds() }` );
        break;
    case 5:
        console.log( `Today is Friday` );
        console.log( `${ today.getHours() + ` ` + ampm }:${ today.getMinutes() }:${ today.getSeconds() }` );
        break;
    default:
        console.log( `Today is God's day` );
        console.log( `${ today.getHours() + ` ` + ampm }:${ today.getMinutes() }:${ today.getSeconds() }` );
}

for (let year = 2014; year < 2050; year++) {
    // console.log(`year`, year);
    let day = new Date(year, 00, 01);
    // console.log(`day`, day)
        if ( day.getDay() === 0 ) {
        console.log(`El primero de enero de ${ year } fue en domingo`);
        }    
}
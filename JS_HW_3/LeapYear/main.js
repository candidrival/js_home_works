const enterYear = +prompt('Enter year:');

if ((enterYear % 4 === 0 && enterYear % 100 !== 0) || enterYear % 400 === 0) {
    console.log(enterYear + " є високосним роком.");
} else {
    console.log(enterYear + " не є високосним роком.");
}
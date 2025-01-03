const enterAge = +prompt('Enter your age:');

let word;
if (enterAge % 10 === 1 && enterAge % 100 !== 11) {
    word = "рік";
} else if ([2, 3, 4].includes(enterAge % 10) && ![12, 13, 14].includes(enterAge % 100)) {
    word = "роки";
} else {
    word = "років";
}
console.log(`Вам ${enterAge} ${word}.`);
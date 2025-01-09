let height = prompt("Введіть висоту ялинки:");
let tree = "";

for (let i = 0; i < height; i++) {
    let spaces = " ".repeat(height - i - 1);
    let stars = "*".repeat(2 * i + 1);
    tree += spaces + stars + "\n";
}

console.log(tree);
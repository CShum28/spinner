process.stdout.write("hello from spinner1.js... \rheyyy\n");

let spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
let timer = 100;
for (const spin of spinner) {
  setTimeout(() => process.stdout.write(`\r ${spin}`), timer);
  timer += 200;
}
setTimeout(() => process.stdout.write("\n"), timer);

// setTimeout(() => process.stdout.write("\n"), timer);

const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);
// const langCode = franc("Alle mennesker er født frie og");
if (langCode === "und") {
  console.log("Sorry, Couldn't figure It out! Try with more sample".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is : ${language.name}`.green);
}

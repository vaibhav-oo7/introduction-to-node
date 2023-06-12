const fs = require("fs");
fs.copyFileSync("file1.txt","file2.txt");
var superheroes = require("superheroes");
var supervillains = require("supervillains");
var mySupervillianname = supervillains.random();
var mySuperHeroName = superheroes.random();
console.log(mySuperHeroName);
console.log(mySupervillianname);
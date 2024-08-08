// Part 3: Transforming Data
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rows = csvData.split ("\n");
let twoDimArray = [];

for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].split(",");
    twoDimArray.push(cells);
}

let cachedData = twoDimArray;

console.log(cachedData);


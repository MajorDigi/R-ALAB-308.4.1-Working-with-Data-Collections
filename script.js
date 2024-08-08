let csvData = "ID, Name, Occupation, Age\n42, Bruce, Knight, 41\n57,Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26";
let rows = csvData.split("\n");
let headings = rows[0].split(",").map(heading => heading.trim().toLowerCase());
let dataObjects = [];

// Create array of objects from CSV data
for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].split(",").map(cell => cell.trim());
    let rowObject = {};
    for (let j = 0; j < cells.length; j++) {
        rowObject[headings[j]] = cells[j];
    }
    dataObjects.push(rowObject);
}

// Remove the last element
dataObjects.pop();

// Insert new object at index 1
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add new object to the end of the array
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(dataObjects);

// Calculate the average age
let totalAge = 0;
for (let i = 0; i < dataObjects.length; i++) {
    totalAge += parseInt(dataObjects[i].age);
}
let averageAge = totalAge / dataObjects.length;

console.log(`The average age is: ${averageAge}`);

// Transform data back to CSV format
// Create the header row
let headerRow = Object.keys(dataObjects[0]).join(", ");

// Create rows from data objects
let csvRows = dataObjects.map(obj => {
    return Object.values(obj).join(", ");
});

// Combine header and rows into a single CSV string
let finalCsvData = [headerRow].concat(csvRows).join("\n");

console.log(finalCsvData);


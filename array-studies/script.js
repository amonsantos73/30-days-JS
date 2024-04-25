// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    works: ["Theory of Relativity", "Photoelectric Effect", "Brownian Motion"],
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    works: [
      "Newton's Laws of Motion",
      "Law of Universal Gravitation",
      "Calculus",
    ],
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
    works: ["Galilean Telescope", "Law of Falling Bodies", "Starry Messenger"],
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    works: [
      "Radioactivity",
      "Isolation of Radium and Polonium",
      "Nobel Prizes in Physics and Chemistry",
    ],
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
    works: [
      "Kepler's Laws of Planetary Motion",
      "Astronomia nova",
      "Harmonices Mundi",
    ],
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
    works: ["Heliocentrism", "De revolutionibus orbium coelestium"],
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
    works: ["Quantum Theory", "Planck's Constant", "Blackbody Radiation"],
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    works: ["Non-reflective Glass", "Surface Chemistry"],
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
    works: ["First Computer Programmer", "Analytical Engine"],
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
    works: [
      "Folding Cabinet Bed",
      "First African-American Woman to Receive a US Patent",
    ],
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    works: ["Nuclear Fission", "Meitnerium"],
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    works: ["Education for Women", "Women's Rights Activism"],
  },
];

console.log(inventors);

// generating the table for inventors
let tableInventors = document.querySelector("#raw-inventors-data");

for (let rowInventors of inventors) {
  let row = document.createElement("tr");
  for (let item of Object.values(rowInventors)) {
    let column = document.createElement("td");
    column.appendChild(document.createTextNode(item));
    row.appendChild(column);
  }
  tableInventors.appendChild(row);
}
console.log(tableInventors);
// just the inventors that were born in the 1500s
const bornIn1500s = inventors.filter(
  (invt) => 1500 <= invt.year && invt.year < 1600
);

let tableBorn1500s = document.getElementById("1500s-inventors-data");

for (let rowInventors of bornIn1500s) {
  let row = document.createElement("tr");
  for (let item of Object.values(rowInventors)) {
    let column = document.createElement("td");
    column.appendChild(document.createTextNode(item));
    row.appendChild(column);
  }
  tableBorn1500s.appendChild(row);
}

//  an array of the inventors first and last names

const listOfFullNames = inventors.map((invt) => invt.first + " " + invt.last);

let tableOfFullNames = document.getElementById("full-names-table");

for (let fullname of listOfFullNames) {
  let row = document.createElement("tr");
  let column = document.createElement("td");
  column.appendChild(document.createTextNode(fullname));
  row.appendChild(column);
  tableOfFullNames.appendChild(row);
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const listOrdByBirthDate = inventors.sort((a, b) => a.year - b.year);
let tableOrdByBirthdate = document.getElementById("table-ord-by-birthdate");
for (let rowInventors of listOrdByBirthDate) {
  let row = document.createElement("tr");
  for (let item of Object.values(rowInventors)) {
    let column = document.createElement("td");
    column.appendChild(document.createTextNode(item));
    row.appendChild(column);
  }
  tableOrdByBirthdate.appendChild(row);
}
// reduce to create a string[] with all the works cited

const listOfWorks = inventors.reduce((list, invt) => {
  for (let work of invt.works) {
    list.push(work);
  }
  return list;
}, []);

const tableOfWorksCited = document.getElementById('works-cited');
for (let work of listOfWorks) {
  let row = document.createElement("tr");
  let column = document.createElement("td");
  column.appendChild(document.createTextNode(work));
  row.appendChild(column);
 tableOfWorksCited.appendChild(row);
}
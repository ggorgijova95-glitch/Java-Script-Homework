function createTable() {
  // Ask user for rows and columns
  let rows = parseInt(prompt("Enter number of rows:"));
  let columns = parseInt(prompt("Enter number of columns:"));
  if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
    alert("Please enter valid positive integers for rows and columns.");
    return;
  }

  // Get the table
  let table = document.getElementById("myTable");

  // Clear table if it already exists
  table.innerHTML = "";

  // Create rows
  for (let i = 1; i <= rows; i++) {
    let tr = document.createElement("tr");

    // Create columns
    for (let j = 1; j <= columns; j++) {
      let td = document.createElement("td");
      td.textContent = "Row-" + i + " Column-" + j;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
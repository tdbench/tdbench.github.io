function buildTable(data){
  const table = document.createElement("table");
  table.className = "table is-fullwidth is-striped is-hoverable";
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const theadRow = document.createElement("tr");

  for (const col of data.columns) {
    const th = document.createElement("th");
    th.innerHTML = col;
    theadRow.appendChild(th);
  }
  thead.appendChild(theadRow);
  table.appendChild(thead);

  data.values.forEach(function(row) {
    const tr = document.createElement("tr");
    for (const cell of row) {
      const td = document.createElement("td");
      td.innerHTML = cell;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table;
};

function loadTable(tableName, tableContainerID) {
  fetch(`static/tables/${tableName}.json`)
    .then((response) => response.json())
    .then((data) => {
      const table = buildTable(data);
      // table.id = tableContainerID.replace("-container", "")
      // const prevTable = getElement
      const tableContainer = document.getElementById(tableContainerID);
      for (const child of tableContainer.children) {
        tableContainer.removeChild(child)
      }
      tableContainer.appendChild(table);
    })
    .catch((error) => console.error("Error loading table:", error));
};

function buildTable(data){
  var table = document.createElement("table");
  table.className = "table is-fullwidth is-striped is-hoverable";
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var theadRow = document.createElement("tr");

  for (var col of data.columns) {
    var th = document.createElement("th");
    th.innerHTML = col;
    theadRow.appendChild(th);
  }
  thead.appendChild(theadRow);
  table.appendChild(thead);

  data.values.forEach(function(row) {
    var tr = document.createElement("tr");
    for (var cell of row) {
      var td = document.createElement("td");
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
      var table = buildTable(data)
      document.getElementById("ds-stats-table-container").appendChild(table)
    })
    .catch((error) => console.error("Error loading table:", error));
};

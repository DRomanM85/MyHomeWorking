function clearTable(){
    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
}

function newTable(table, typeMethod) {
    let count = 1;
    for (let i = 0; i < 10; i++) {
        let row = table.insertRow();
        for (let j = 0; j < 10; j++) {
            let cell = row.insertCell();
            if(typeMethod === "R"){
                cell.textContent = Math.floor(Math.random() * 100) + 1;
            }else if(typeMethod === "S"){
                cell.textContent = count++;
            }
        }
    }
}

function createTable(typeMethod = ""){
    clearTable();
    let table = document.createElement("table");
    switch (typeMethod){
        case "R":
            newTable(table, typeMethod);
            break;
        case "S":
            newTable(table, typeMethod);
            break;
        default:
            newTable(table, typeMethod)
            break;
    }
    tableContainer.appendChild(table);
}



function ajout() {
    const table = document.getElementById('dynamicTable'); 
    const newRow = table.insertRow(-1); 

    
    const descCell = newRow.insertCell(0);
    descCell.textContent = `desc${table.rows.length - 1}`; 

    for (let i = 1; i <= 3; i++) { 
        const cell = newRow.insertCell(i);
        const input = document.createElement('input');
        input.type = 'number';
        cell.appendChild(input);
    }
}


function addRow() {
    const table = document.getElementById('dynamicTable'); 
    const newRow = table.insertRow(-1); 

  
    const descCell = newRow.insertCell(0);
    descCell.textContent = `desc${table.rows.length - 1}`; 

    for (let i = 1; i <= 3; i++) {
        const cell = newRow.insertCell(i);
        const input = document.createElement('input');
        input.type = 'number';
        cell.appendChild(input);
    }
}

function Remplir() {
    const table = document.getElementById('dynamicTable');
    const lastRow = table.rows[table.rows.length - 1];

    
    if (lastRow) {
        const inputs = lastRow.querySelectorAll('input');
        inputs[0].value = 10; 
        inputs[1].value = 20; 
        inputs[2].value = 30; 
    }
}
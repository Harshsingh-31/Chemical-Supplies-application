
let selectedRow = null; // Track the selected row
let currentEditRow = null; // Track the row being edited

const originalChemicals = [
    { id: 1, name: 'Ammonium Persulfate', vendor: 'LG Chem', density: 3525.92, viscosity: 60.63, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 6495.18 },
    { id: 2, name: 'Caustic Potash', vendor: 'Formosa', density: 3172.15, viscosity: 48.22, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 8751.90 },
    { id: 3, name: 'Dimethylaminopropylamino', vendor: 'LG Chem', density: 8435.37, viscosity: 12.62, packaging: 'Barrel', packSize: 75, unit: 'L', quantity: 5964.61 },
    { id: 4, name: 'Mono Ammonium Phosphate', vendor: 'Sinopec', density: 1597.65, viscosity: 76.51, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 8183.73 },
    { id: 5, name: 'Ferric Nitrate', vendor: 'DowDuPont', density: 364.04, viscosity: 14.90, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 4154.33 },
    { id: 6, name: 'n-Pentane', vendor: 'Sinopec', density: 4535.26, viscosity: 66.76, packaging: 'N/A', packSize: 'N/A', unit: 't', quantity: 6272.34 },
    { id: 7, name: 'Glycol Ether PM', vendor: 'LG Chem', density: 6495.18, viscosity: 72.12, packaging: 'Bag', packSize: 250, unit: 'kg', quantity: 8749.54 },
    { id: 8, name: 'Ethylene Glycol', vendor: 'Formosa', density: 1302.00, viscosity: 10.00, packaging: 'Bag', packSize: 100, unit: 'kg', quantity: 9000.00 },
    { id: 9, name: 'Potassium Carbonate', vendor: 'LG Chem', density: 3500.00, viscosity: 25.00, packaging: 'Bag', packSize: 120, unit: 'kg', quantity: 7000.00 },
    { id: 10, name: 'Calcium Chloride', vendor: 'Sinopec', density: 2400.00, viscosity: 45.00, packaging: 'Barrel', packSize: 80, unit: 'L', quantity: 5400.00 },
    { id: 11, name: 'Sodium Bicarbonate', vendor: 'DowDuPont', density: 2900.00, viscosity: 18.00, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 4800.00 },
    { id: 12, name: 'Sodium Hydroxide', vendor: 'Formosa', density: 3200.00, viscosity: 20.00, packaging: 'Bag', packSize: 110, unit: 'kg', quantity: 6200.00 },
    { id: 13, name: 'Sulfuric Acid', vendor: 'Sinopec', density: 4500.00, viscosity: 55.00, packaging: 'Barrel', packSize: 90, unit: 'L', quantity: 8300.00 },
    { id: 14, name: 'Hydrochloric Acid', vendor: 'LG Chem', density: 3800.00, viscosity: 35.00, packaging: 'Barrel', packSize: 85, unit: 'L', quantity: 7500.00 },
    { id: 15, name: 'Phosphoric Acid', vendor: 'DowDuPont', density: 4100.00, viscosity: 40.00, packaging: 'Bag', packSize: 105, unit: 'kg', quantity: 9200.00 }
];

let chemicals = [...originalChemicals];

function loadTableData() {
    const tableBody = document.querySelector('#chemicalTable tbody');
    tableBody.innerHTML = '';

    chemicals.forEach((chemical, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${chemical.id}</td>
            <td>${chemical.name}</td>
            <td>${chemical.vendor}</td>
            <td>${chemical.density}</td>
            <td>${chemical.viscosity}</td>
            <td>${chemical.packaging}</td>
            <td>${chemical.packSize}</td>
            <td>${chemical.unit}</td>
            <td>${chemical.quantity}</td>
            <td><button class="btn btn-sm btn-warning" onclick="editRow(${index})">Edit</button></td>
        `;
        
        row.addEventListener('click', function() {
            selectRow(this);
        });

        tableBody.appendChild(row);
    });
}

function selectRow(row) {
    if (selectedRow) {
        selectedRow.classList.remove('selected'); // Remove from previously selected
    }
    selectedRow = row; // Update to currently selected row
    row.classList.add('selected'); // Highlight new selected row
}


function sortTable(n) {
    chemicals.sort((a, b) => {
        const valA = Object.values(a)[n];
        const valB = Object.values(b)[n];
        return valA > valB ? 1 : -1;
    });
    loadTableData();
}

function addRow() {
    const newChemical = {
        id: chemicals.length + 1,
        name: prompt("Enter chemical name:"),
        vendor: prompt("Enter vendor name:"),
        density: parseFloat(prompt("Enter density:")),
        viscosity: parseFloat(prompt("Enter viscosity:")),
        packaging: prompt("Enter packaging:"),
        packSize: parseFloat(prompt("Enter pack size:")),
        unit: prompt("Enter unit:"),
        quantity: parseFloat(prompt("Enter quantity:"))
    };
    chemicals.push(newChemical);
    loadTableData();
}

function moveRowUp() {
    const rowIndex = selectedRow.rowIndex - 1;
    if (rowIndex > 0) {
        const [movedRow] = chemicals.splice(rowIndex, 1);
        chemicals.splice(rowIndex - 1, 0, movedRow);
        loadTableData();
    }
}

function moveRowDown() {
    const rowIndex = selectedRow.rowIndex - 1;
    if (rowIndex < chemicals.length - 1) {
        const [movedRow] = chemicals.splice(rowIndex, 1);
        chemicals.splice(rowIndex + 1, 0, movedRow);
        loadTableData();
    }
}

function deleteRow() {
    const rowIndex = selectedRow.rowIndex - 1;
    chemicals.splice(rowIndex, 1);
    loadTableData();
}

function refreshTable() {
    chemicals = [...originalChemicals];
    loadTableData();
}

function saveTable() {
    alert("Data saved!");
}

function editRow(index) {
    currentEditRow = index;
    const chemical = chemicals[index];
    document.getElementById('editChemicalName').value = chemical.name;
    document.getElementById('editVendor').value = chemical.vendor;
    document.getElementById('editDensity').value = chemical.density;
    document.getElementById('editViscosity').value = chemical.viscosity;
    document.getElementById('editPackaging').value = chemical.packaging;
    document.getElementById('editPackSize').value = chemical.packSize;
    document.getElementById('editUnit').value = chemical.unit;
    document.getElementById('editQuantity').value = chemical.quantity;

    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

function saveEdit() {
    const chemical = chemicals[currentEditRow];
    chemical.name = document.getElementById('editChemicalName').value;
    chemical.vendor = document.getElementById('editVendor').value;
    chemical.density = parseFloat(document.getElementById('editDensity').value);
    chemical.viscosity = parseFloat(document.getElementById('editViscosity').value);
    chemical.packaging = document.getElementById('editPackaging').value;
    chemical.packSize = parseFloat(document.getElementById('editPackSize').value);
    chemical.unit = document.getElementById('editUnit').value;
    chemical.quantity = parseFloat(document.getElementById('editQuantity').value);

    loadTableData();
    const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
}
  

window.onload = loadTableData;

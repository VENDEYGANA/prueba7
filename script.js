function agregarPantalla() {
    var pantalla = document.getElementById('pantalla').value;
    var agente = document.getElementById('agente').value;
    var estatus = document.getElementById('estatus').value;

    // Obtener fecha y hora del sistema
    var fecha = new Date();
    var fechaFormateada = fecha.toLocaleDateString();
    var horaFormateada = fecha.toLocaleTimeString();

    if (pantalla && agente && estatus) {
        var tableBody = document.getElementById('pantallas-body');
        var row = document.createElement('tr');

        var cellPantalla = document.createElement('td');
        var cellFecha = document.createElement('td');
        var cellHora = document.createElement('td');
        var cellAgente = document.createElement('td');
        var cellEstatus = document.createElement('td');

        cellPantalla.textContent = pantalla;
        cellFecha.textContent = fechaFormateada;
        cellHora.textContent = horaFormateada;
        cellAgente.textContent = agente;
        cellEstatus.textContent = estatus;

        if (estatus === "vendida") {
            row.classList.add('fila-vendida');
        } else {
            row.classList.add('fila-disponible');
        }

        row.appendChild(cellPantalla);
        row.appendChild(cellFecha);
        row.appendChild(cellHora);
        row.appendChild(cellAgente);
        row.appendChild(cellEstatus);

        tableBody.appendChild(row);

        document.getElementById('pantalla').value = '';
        document.getElementById('agente').value = '';
        document.getElementById('estatus').value = 'disponible';

        // Guardar en localStorage
        guardarPantallas();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function filtrarPantallas() {
    var filterDate = document.getElementById('filtrarFecha').value;
    var tableBody = document.getElementById('pantallas-body');
    var rows = tableBody.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var cellFecha = row.getElementsByTagName('td')[1];
        var fecha = cellFecha.textContent;

        if (fecha === filterDate || filterDate === '') {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

function guardarPantallas() {
    var tableBody = document.getElementById('pantallas-body');
    var rows = tableBody.getElementsByTagName('tr');
    var pantallas = [];

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var pantalla = {
            nombre: row.getElementsByTagName('td')[0].textContent,
            fecha: row.getElementsByTagName('td')[1].textContent,
            hora: row.getElementsByTagName('td')[2].textContent,
            agente: row.getElementsByTagName('td')[3].textContent,
            estatus: row.getElementsByTagName('td')[4].textContent
        };
        pantallas.push(pantalla);
    }

    localStorage.setItem('pantallas', JSON.stringify(pantallas));
}

function cargarPantallas() {
    var pantallas = JSON.parse(localStorage.getItem('pantallas') || '[]');
    var tableBody = document.getElementById('pantallas-body');

    for (var i = 0; i < pantallas.length; i++) {
        var pantalla = pantallas[i];
        var row = document.createElement('tr');

        var cellPantalla = document.createElement('td');
        var cellFecha = document.createElement('td');
        var cellHora = document.createElement('td');
        var cellAgente = document.createElement('td');
        var cellEstatus = document.createElement('td');

        cellPantalla.textContent = pantalla.nombre;
        cellFecha.textContent = pantalla.fecha;
        cellHora.textContent = pantalla.hora;
        cellAgente.textContent = pantalla.agente;
        cellEstatus.textContent = pantalla.estatus;

        if (pantalla.estatus === "vendida") {
            row.classList.add('fila-vendida');
        } else {
            row.classList.add('fila-disponible');
        }

        row.appendChild(cellPantalla);
        row.appendChild(cellFecha);
        row.appendChild(cellHora);
        row.appendChild(cellAgente);
        row.appendChild(cellEstatus);

        tableBody.appendChild(row);
    }
}

function exportarXLSX() {
    var pantallas = JSON.parse(localStorage.getItem('pantallas')[_{{{CITATION{{{_1{](https://github.com/la9una/web/tree/ba1073ae044ebb7b538a3b13f0f9598f7c410bb6/docs%2Fbootstrap%2Falignci.md)[_{{{CITATION{{{_2{](https://github.com/CLONATORE/markdowns/tree/82cfb03683ceb807a7091de48045e6a7485acd72/webpack.md)
function guardarFicha() {
    const ficha = {
        rut: document.getElementById('rut').value,
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        comentarios: document.getElementById('comentarios').value
    };

    // Validación básica para asegurarse de que se llenen los campos obligatorios
    if (!ficha.rut || !ficha.nombres || !ficha.apellidos || !ficha.email || !ficha.fechaNacimiento) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Enviar los datos al servidor
    fetch('/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ficha)
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
}

function buscarPorApellido() {
    const apellido = document.getElementById('buscarApellido').value;
    fetch(`/buscar?apellido=${apellido}`)
        .then(response => response.json())
        .then(data => {
            const resultados = document.getElementById('resultados');
            resultados.innerHTML = ''; // Limpiar resultados previos
            data.forEach(ficha => {
                const li = document.createElement('li');
                li.textContent = `${ficha.nombres} ${ficha.apellidos} - ${ficha.rut}`;
                resultados.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

function cerrarFormulario() {
    window.close();
}

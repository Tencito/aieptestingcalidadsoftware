function guardarFicha() {
    // Obtener los valores de los campos
    const rut = document.getElementById('rut').value.trim();
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    const estadoCivil = document.getElementById('estadoCivil').value.trim();
    const comentarios = document.getElementById('comentarios').value.trim(); // Campo opcional

    // Validación de campos obligatorios
    if (!rut || !nombres || !apellidos || !direccion || !ciudad || !telefono || !email || !fechaNacimiento || !estadoCivil) {
        alert('Por favor, complete todos los campos obligatorios antes de guardar.');
        return; // Detener el guardado si hay campos vacíos
    }

    // Crear objeto ficha
    const ficha = {
        rut,
        nombres,
        apellidos,
        direccion,
        ciudad,
        telefono,
        email,
        fechaNacimiento,
        estadoCivil,
        comentarios // Campo opcional
    };

    // Guardar ficha en localStorage
    let fichas = JSON.parse(localStorage.getItem('fichasMedicas')) || [];
    fichas.push(ficha);
    localStorage.setItem('fichasMedicas', JSON.stringify(fichas));

    alert('Ficha médica guardada con éxito.');
}

function buscarPorApellido() {
    const apellido = document.getElementById('buscarApellido').value.toLowerCase();
    const fichas = JSON.parse(localStorage.getItem('fichasMedicas')) || [];
    const resultados = fichas.filter(f => f.apellidos.toLowerCase().includes(apellido));
    
    const resultadosElement = document.getElementById('resultados');
    resultadosElement.innerHTML = ''; // Limpiar resultados previos
    resultados.forEach(ficha => {
        const li = document.createElement('li');
        li.textContent = `${ficha.nombres} ${ficha.apellidos} - ${ficha.rut}`;
        resultadosElement.appendChild(li);
    });
}

function cerrarFormulario() {
    // Mostrar un mensaje al usuario
    alert('Gracias por usar la aplicación. Puedes cerrar esta ventana manualmente.');

    // Redirigir a otra página como alternativa al cierre de ventana
    window.location.href = 'https://www.google.com'; // Reemplaza con la URL a la que desees redirigir
}


function esEmailValido(email) {
    // validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function esRUTValido(rut) {
    // validar el formato del RUT
    const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]$/;
    return rutRegex.test(rut);
}

function guardarFicha() {
    const start = performance.now(); // Iniciar temporizador

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

    // Validación del formato del RUT
    if (!esRUTValido(rut)) {
        alert('Por favor, ingrese un RUT válido en el formato correcto.');
        return; // Detener el guardado si el RUT no es válido
    }

    // Validación del formato del email
    if (!esEmailValido(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return; // Detener el guardado si el email no es válido
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

    const end = performance.now(); // Terminar temporizador
    const timeTaken = end - start; // Tiempo tomado
    alert(`Ficha médica guardada con éxito en ${timeTaken.toFixed(2)} ms. Total de fichas guardadas: ${fichas.length}`);
}

function buscarPorApellido() {
    const apellido = document.getElementById('buscarApellido').value.trim().toLowerCase();
    const fichas = JSON.parse(localStorage.getItem('fichasMedicas')) || [];
    const resultados = fichas.filter(f => f.apellidos.toLowerCase().includes(apellido));
    
    const resultadosElement = document.getElementById('resultados');
    resultadosElement.innerHTML = ''; // Limpiar resultados previos
    if (resultados.length === 0) {
        resultadosElement.innerHTML = '<li>No se encontraron resultados.</li>';
    } else {
        resultados.forEach(ficha => {
            const li = document.createElement('li');
            li.textContent = `${ficha.nombres} ${ficha.apellidos} - ${ficha.rut}`;
            resultadosElement.appendChild(li);
        });
    }
}

function cerrarFormulario() {
    // Mostrar un mensaje al usuario
    alert('Gracias por usar la aplicación. Puedes cerrar esta ventana manualmente.');

    // Redirigir a otra página como alternativa al cierre de ventana
    window.location.href = 'https://www.google.com'; // Reemplaza con la URL a la que desees redirigir
}

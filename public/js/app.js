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

    // O redirigir a otra página
    window.location.href = 'https://www.google.com'; // Reemplaza con la URL a la que desees redirigir
}

}

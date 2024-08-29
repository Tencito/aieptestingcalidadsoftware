const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

let fichasMedicas = []; // Almacenamiento temporal en memoria

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Ruta raíz para servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

// Ruta para guardar la ficha médica
app.post('/guardar', (req, res) => {
    const nuevaFicha = req.body;
    const fichaExistente = fichasMedicas.find(f => f.rut === nuevaFicha.rut);

    if (fichaExistente) {
        return res.json({ message: 'El registro ya existe. ¿Desea sobrescribirlo?' });
    }

    fichasMedicas.push(nuevaFicha);
    console.log('Ficha guardada:', nuevaFicha); 
    res.json({ message: 'Ficha médica guardada con éxito.' });
});

// Ruta para buscar fichas por apellido
app.get('/buscar', (req, res) => {
    const apellido = req.query.apellido;
    const resultados = fichasMedicas.filter(f => f.apellidos.toLowerCase().includes(apellido.toLowerCase()));
    console.log('Búsqueda por apellido:', apellido); 
    console.log('Resultados encontrados:', resultados); 
    res.json(resultados);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

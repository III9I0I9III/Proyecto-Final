const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

app.get('/api/actividades', (req, res) => {
  res.json({
    "2025-05-21": [
      { titulo: "Actividad 1", materia: "Matemáticas", entregado: false },
      { titulo: "Actividad 2", materia: "Lenguaje", entregado: true }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});

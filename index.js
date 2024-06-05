const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/routes-rincon');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://jairouptc:nyxmeR-zusjoz-8zubda@cluster0.9lfyrk5.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexión a la base de datos establecida");
}).catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
});

app.use(express.json());

app.use('/', playerRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
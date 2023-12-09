const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const estudianteRoutes = require("./routes/estudiante");
const tutorRoutes = require("./routes/tutor");
const administratorRoutes = require("./routes/administrators");
const personasRoutes = require("./routes/personas");
const bodyparser = require("body-parser");


const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use("/API", estudianteRoutes);
app.use("/API", tutorRoutes);
app.use("/API", administratorRoutes);
app.use("/API", personasRoutes);


// Rutas
app.get("/", (_req, res) => {
    res.send("Welcome to my Api Rest");
});

// Conexion a la BD MongoDB Atlas 
mongoose.connect(process.env.MONGOOSE_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.log(error));






app.listen(port, () => console.log("El servidor se esta escuchando por el puerto", port));


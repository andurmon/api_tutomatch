const express = require("express");
const estudianteSchema = require("../models/estudiante");

const router = express.Router();

// crear estudiante

router.post("/estudiante", (req, res) => {
    const estudiante = estudianteSchema(req.body);
    estudiante.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error)) 
});

// consultar estudiante

router.get("/estudiante", (req, res) => {
    estudianteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// consultar UN estudiante

router.get("/estudiante:id", (req, res) => {
    const {id} = req.params;
    estudianteSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// Actualizar un estudiante

router.put("/estudiante:id", (req, res) => {
    const {id} = req.params;
    const { cedula, nombre, niveleducativo, email, telefono, buscartutor} = req.body;
    estudianteSchema
    .updateOne({ _id: id}, { $set: {cedula, nombre, niveleducativo, email, telefono, buscartutor} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});


// Eliminar un estudiante

router.delete("/estudiante:id", (req, res) => {
    const {id} = req.params;
    estudianteSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});


module.exports = router;



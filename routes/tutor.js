const express = require("express");
const tutorSchema = require("../models/tutor");

const router = express.Router();

// crear tutor

router.post("/tutor", (req, res) => {
    const tutor = tutorSchema(req.body);
    tutor.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error)) 
});

// consultar tutor

router.get("/tutor", (req, res) => {
    tutorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// consultar UN tutor

router.get("/tutor:id", (req, res) => {
    const {id} = req.params;
    tutorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// Actualizar un tutor

router.put("/tutor:id", (req, res) => {
    const {id} = req.params;
    const { cedula, nombre, especialidad, tarifaporhora, email, horariodisponible} = req.body;
    tutorSchema
    .updateOne({ _id: id}, { $set: {cedula, nombre, especialidad, tarifaporhora, email, horariodisponible} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});


// Eliminar un tutor

router.delete("/tutor:id", (req, res) => {
    const {id} = req.params;
    tutorSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});


module.exports = router;

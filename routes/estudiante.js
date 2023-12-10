const express = require("express");
const router = express.Router();

const { EstudianteService } = require("../service/EstudianteService");
const estudianteService = new EstudianteService();

// crear estudiante
router.post("/estudiante", estudianteService.postEstudiante);

// consultar estudiante
router.get("/estudiante", estudianteService.getEstudiantes);

// consultar UN estudiante
router.get("/estudiante/:id", estudianteService.getEstudianteById);

// Actualizar un estudiante
router.put("/estudiante/:id", estudianteService.updateEstudiante);


// Eliminar un estudiante
router.delete("/estudiante/:id", estudianteService.deleteEstudiante);


module.exports = router;
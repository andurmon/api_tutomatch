const express = require("express");
const router = express.Router();

const { PersonaService } = require("../service/PersonaService");
const persona = new PersonaService();

/**
 * Consulta de todos los personas
 */
router.get("/personas", persona.getPersonas);

/**
 * GET para consultar una persona por numero de Id
 */
router.get("/personas/:id", persona.getPersonaById);


/**
 * Ruta POST para agregar personas
 */
router.post("/personas", persona.postPersona);

/**
 * PUT par actualizar una persona por numero de Id
 */
router.put("/personas/:id", persona.updatePersona);


/**
 * DELETE para eliminar una persona
 */
router.delete("/personas/:id", persona.deletePersona);

module.exports = router;
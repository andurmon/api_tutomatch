const express = require("express");
const router = express.Router();

const { TutorService } = require("../service/TutorService");
const tutorService = new TutorService();

/**
 * GET para consultar todos los tutores
 */
router.get("/tutor", tutorService.getTutores);

/**
 * GET para consultar un tutor por numero de Id
 */
router.get("/tutor/:id", tutorService.getTutorById);

/**
 * POST para agregar tutores
 */
router.post("/tutor", tutorService.postTutor);

/**
 * PUT par actualizar un tutor por numero de Id
 */
router.put("/tutor/:id", tutorService.updateTutor);


/**
 * DELETE para eliminar un tutor
 */
router.delete("/tutor/:id", tutorService.deleteTutor);


module.exports = router;

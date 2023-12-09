const express = require("express");
const router = express.Router();

const { AdministratorService } = require("../service/AdminstratorService");
const administrator = new AdministratorService();

/**
 * Consulta de todos los administradores
 */
router.get("/administrators", administrator.getAdmins);

/**
 * GET para consultar un tutor por numero de Id
 */
router.get("/administrators/:id", administrator.getAdminById);


/**
 * Ruta POST para agregar administradores
 */
router.post("/administrators", administrator.postAdmin);

/**
 * PUT par actualizar un administrator por numero de Id
 */
router.put("/administrators/:id", administrator.updateAdmin);


/**
 * DELETE para eliminar un administrator
 */
router.delete("/administrators/:id", administrator.deleteAdmin);

module.exports = router;
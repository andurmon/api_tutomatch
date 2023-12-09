const { AdministratorModel } = require("../models/Administrator");

class AdministratorService {

    constructor() { }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    async getAdmins(req, res) {
        try {
            const admins = await AdministratorModel.find().exec();
            res.json(admins);
        } catch (error) {
            res.status(500);
            res.json({ message: error.message });
        }
    }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    async getAdminById(req, res) {
        try {
            const { id } = req.params;
            const admin = await AdministratorModel.findById(id).exec();

            if (!admin) {
                res.status(404);
                res.json({ message: "Aministrador no encontrado" });
                return;
            }
            res.json(admin);
        } catch (error) {
            res.status(500);
            res.json({ message: error.message });
        }
    }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    async postAdmin(req, res) {
        try {
            const admin = AdministratorModel(req.body);
            const adminCreated = await admin.save();
            res.json(adminCreated);
        } catch (error) {
            res.status(500);
            res.json({ message: error.message });
        }
    }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    async updateAdmin(req, res) {
        try {
            const { id } = req.params;
            const { cedula, nombre, especialidad, tarifaporhora, email, horariodisponible } = req.body;
            const admin = await AdministratorModel.updateOne(
                { _id: id }, {
                $set: {
                    cedula,
                    nombre,
                    especialidad,
                    tarifaporhora,
                    email,
                    horariodisponible
                }
            })
            if (admin.modifiedCount === 0) {
                res.status(404);
                res.json({ message: "Tutor no encontrado" });
                return;
            }
            res.json(admin);
        } catch (error) {
            res.status(500);
            res.json({ message: error.message });
        }
    }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    async deleteAdmin(req, res) {
        try {
            const { id } = req.params;
            const admin = await AdministratorModel.deleteOne({ _id: id }).exec()
            if (admin.deletedCount === 0) {
                res.status(404);
                res.json({ message: "Tutor no encontrado" });
                return;
            }
            res.json(admin);
        } catch (error) {
            res.status(500);
            res.json({ message: error.message });
        }
    }


}

module.exports.AdministratorService = AdministratorService;
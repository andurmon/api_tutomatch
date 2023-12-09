const { EstudianteModel } = require("../models/Estudiante");

class EstudianteService {

    estudianteModel;

    constructor() { }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    async getEstudiantes(req, res) {
        try {
            const estudiantes = await EstudianteModel.find().exec();
            res.json(estudiantes);
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
    async getEstudianteById(req, res) {
        try {
            const { id } = req.params;
            const estudiante = await EstudianteModel.findById(id).exec();
            if (!estudiante) {
                res.status(404);
                res.json({ message: "Estudiante no encontrado" });
                return;
            }
            res.json(estudiante);
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
    async postEstudiante(req, res) {
        try {
            const estudiante = EstudianteModel(req.body);
            const estudianteCreated = await estudiante.save();
            res.json(estudianteCreated);
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
    async updateEstudiante(req, res) {
        try {
            const { id } = req.params;
            const { cedula, nombre, especialidad, tarifaporhora, email, horariodisponible } = req.body;
            const estudiante = await EstudianteModel.updateOne(
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
            if (estudiante.modifiedCount === 0) {
                res.status(404);
                res.json({ message: "Estudiante no encontrado" });
                return;
            }
            res.json(estudiante);
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
    async deleteEstudiante(req, res) {
        try {
            const { id } = req.params;
            const estudiante = await EstudianteModel.deleteOne({ _id: id }).exec()
            if (estudiante.deletedCount === 0) {
                res.status(404);
                res.json({ message: "Estudiante no encontrado" });
                return;
            }
            res.json(estudiante);
        } catch (error) {
            res.status(500);
            res.json({ message: error.message });
        }
    }


}

module.exports.EstudianteService = EstudianteService;
const { TutorModel } = require("../models/Tutor");

class TutorService {

    tutorModel;

    constructor() { }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    async getTutores(req, res) {
        try {
            const tutores = await TutorModel.find().exec();
            res.json(tutores);
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
    async getTutorById(req, res) {
        try {
            const { id } = req.params;
            const tutor = await TutorModel.findById(id).exec();
            if (!tutor) {
                res.status(404);
                res.json({ message: "Tutor no encontrado" });
                return;
            }
            res.json(tutor);
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
    async postTutor(req, res) {
        try {
            const tutor = TutorModel(req.body);
            const tutorCreated = await tutor.save();
            res.json(tutorCreated);
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
    async updateTutor(req, res) {
        try {
            const { id } = req.params;
            const { cedula, nombre, especialidad, tarifaporhora, email, horariodisponible } = req.body;
            const tutor = await TutorModel.updateOne(
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
            if (tutor.modifiedCount === 0) {
                res.status(404);
                res.json({ message: "Tutor no encontrado" });
            }
            res.json(tutor);
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
    async deleteTutor(req, res) {
        try {
            const { id } = req.params;
            const tutor = await TutorModel.deleteOne({ _id: id }).exec()
            if (tutor.deletedCount === 0) {
                res.status(404);
                res.json({ message: "Tutor no encontrado" });
            }
            res.json(tutor);
        } catch (error) {
            res.status(500);
            res.json({ message: error.message });
        }
    }


}

module.exports.TutorService = TutorService;

const { PersonaModel } = require("../models/Personas");

class PersonaService {

    constructor() { }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    async getPersonas(req, res) {
        try {
            const personas = await PersonaModel.find().exec();
            res.json(personas);
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
    async getPersonaById(req, res) {
        try {
            const { id } = req.params;
            const persona = await PersonaModel.findById(id).exec();
            if (!persona) {
                res.status(404);
                res.json({ message: "Tutor no encontrado" });
                return;
            }
            res.json(persona);
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
    async postPersona(req, res) {
        try {
            const persona = PersonaModel(req.body);
            const personaCreated = await persona.save();
            res.json(personaCreated);
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
    async updatePersona(req, res) {
        try {
            const { id } = req.params;
            const persona = await PersonaModel.updateOne(
                { _id: id }, {
                $set: req.body
            })
            if (persona.modifiedCount === 0) {
                res.status(404);
                res.json({ message: "Tutor no encontrado" });
                return;
            }
            res.json(persona);
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
    async deletePersona(req, res) {
        try {
            const { id } = req.params;
            const persona = await PersonaModel.deleteOne({ _id: id }).exec()
            if (persona.deletedCount === 0) {
                res.status(404);
                res.json({ message: "Tutor no encontrado" });
                return;
            }
            res.json(persona);
        } catch (error) {
            res.status(500);
            res.json({ message: error.message });
        }
    }


}

module.exports.PersonaService = PersonaService;
const moongose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');

const { Persona } = require("./Personas");
const { tutorSchema } = require("./Tutor");

//Clase Administrators Hereda de la clase Persona
class Administrator extends Persona {
    constructor() {
        super();
    }

    nombre = {
        type: String,
        required: true
    }

    Estudiantes = { type: [moongose.Schema.Types.ObjectId], ref: "estudiante", autopopulate: true, required: false }

    Tutors = { type: [moongose.Schema.Types.ObjectId], ref: "tutor", autopopulate: true, required: false }

    Tutor = {
        type: tutorSchema,
        ref: "tutor",
        required: false
    }

    getEmail() {
        return this.email;
    }
    getTelefono() {
        return this.telefono;
    }
    aprobarTutor(tutor) {
        return this.Tutors.find(element => element === tutor);
    }
    bloquearEstudiante(estudiante) {
        return this.Estudiantes.find(element => element === estudiante);
    }
    gestionarPagos() {
        return "gestionados"
    }

}

const administratorSchema = moongose.Schema(new Administrator());
administratorSchema.loadClass(Administrator);
administratorSchema.plugin(autopopulate);

const AdministratorModel = moongose.model("administrators", administratorSchema);

module.exports.AdministratorModel = AdministratorModel;
module.exports.administratorSchema = administratorSchema;
const moongose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');
const { Persona } = require("./Personas");

//* Clase Tutor se extiende de la clase persona
class Tutor extends Persona {
    especialidad = {
        type: String,
        required: true
    }
    tarifaporhora = {
        type: String,
        required: true
    }
    horariodisponible = {
        type: String,
        required: true
    }

    // Un tutor puede tener varios estudiantes
    Estudiantes = { type: [moongose.Schema.Types.ObjectId], ref: "estudiante", autopopulate: true, required: false }

    getNombre() {
        return this.nombre;
    }

    getEspecialidad() {
        return this.especialidad;
    }

    getHorarioDisponible() {
        return this.horariodisponible;
    }

    programarClase(estudiante, fecha, duracion) {
        return "Clase programada"
    }
}

const tutorSchema = moongose.Schema(new Tutor);
tutorSchema.loadClass(Tutor);
tutorSchema.plugin(autopopulate);

const TutorModel = moongose.model("tutor", tutorSchema);

module.exports.tutorSchema = tutorSchema;
module.exports.TutorModel = TutorModel;
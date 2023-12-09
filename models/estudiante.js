const moongose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');
const { Persona } = require("./Personas");

class Estudiante extends Persona {
    niveleducativo = {
        type: String,
        required: true
    }

    // Un estudiante puede programas clase con varios tutores y buscar muchos tutores
    Tutors = { type: [moongose.Schema.Types.ObjectId], ref: "tutor", autopopulate: true, required: false }

    getNombre() {
        return this.nombre;
    }

    getNivelEducativo() {
        return this.niveleducativo;
    }

    getEmail() {
        return this.email;
    }

    getTelefono() {
        return this.telefono;
    }

    buscarTutor(especialidad) {
        return this.Tutors.find(tutor => tutor.especialidad === especialidad);
    }
}
const estudianteSchema = moongose.Schema(new Estudiante());
estudianteSchema.loadClass(Estudiante);
estudianteSchema.plugin(autopopulate);

module.exports.EstudianteModel = moongose.model("estudiante", estudianteSchema);
module.exports.estudianteSchema = estudianteSchema;
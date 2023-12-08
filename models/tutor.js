import { Schema, model } from "mongoose";

const tutorSchema = Schema({
    cedula: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    tarifaporhora: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    horariodisponible: {
        type: String,
        required: true
    },
});


export default model("tutor", tutorSchema);

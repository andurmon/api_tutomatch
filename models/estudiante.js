import { Schema, model } from "mongoose";

const estudianteSchema = Schema({
    cedula: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    niveleducativo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    buscartutor: {
        type: String,
        required: true
    },
});


export default model("estudiante", estudianteSchema);

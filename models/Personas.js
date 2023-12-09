const moongose = require("mongoose");

// Clase Persona
class Persona {

    nombre = {
        type: String,
        required: true
    }
    cedula = {
        type: String,
        required: true
    }
    edad = {
        type: Number,
        required: true
    }
    direccion = {
        type: String,
        required: true
    }
    telefono = {
        type: String,
        required: true
    }
    email = {
        type: String,
        required: true
    }
    tipoUsuario = {
        type: String,
        required: true
    }

    //* Getters
    obtenernombre() {
        return this.nombre;
    }
    obteneredad() {
        return this.edad;
    }
    obtenerdireccion() {
        return this.direccion;
    }
    obtenertelefono() {
        return this.telefono;
    }
    obteneremail() {
        return this.email;
    }
    obtenertipoUsuario() {
        return this.tipoUsuario;
    }

    //* Setters
    establecernombre(nombre) {
        this.nombre = nombre
    }
    estableceredad(edad) {
        this.edad = edad
    }
    establecerdireccion(direccion) {
        this.direccion = direccion
    }
    establecertelefono(telefono) {
        this.telefono = telefono
    }
    estableceremail(email) {
        this.email = email
    }
    establecertipoUsuario(tipoUsuario) {
        this.tipoUsuario = tipoUsuario
    }
}


const personasSchema = moongose.Schema(new Persona())
personasSchema.loadClass(Persona);


const PersonaModel = moongose.model("personas", personasSchema);

module.exports.Persona = Persona;
module.exports.PersonaModel = PersonaModel;
module.exports.PersonaSchema = personasSchema;
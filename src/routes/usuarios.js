const express = require("express");
const router2 = express.Router();

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");


// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los libros
router2.get("/", requiredScopes("read:libros"), getAllUsuarios);

// Ruta para obtener un libro por id
router2.get("/:id", requiredScopes("read:libros"), getUsuarioById);

// Ruta para crear un nuevo Libro
router2.post("/", requiredScopes("write:libros"), createUsuario);

// Ruta para actualizar un Libro existente
router2.put("/:id", requiredScopes("write:libros"), updateUsuario);

// Ruta para eliminar un Libro
router2.delete("/:id", requiredScopes("write:libros"), deleteUsuario);




module.exports = router2;

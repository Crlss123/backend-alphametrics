"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require("morgan");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(morgan("dev"));
app.use(express_1.default.json());
app.get("/student/getallstudents", (req, res) => {
    res.send("Get all students");
});
app.post("/student/createstudent", (req, res) => {
    const id = req.body.id;
    res.send(`Creates a new student with id ${id}`);
});
app.patch("/student/patchstudent/:id", (req, res) => {
    res.send(`Update this parts of the product with id ${req.params.id}: ${req.body.status}, ${req.body.nombre} `);
});
app.delete("/student/deletestudent/:id", (req, res) => {
    res.send(`Delete student with id ${req.params.id}`);
});
app.get("/student/getstudent/:id", (req, res) => {
    res.send(`Get student with id ${req.params.id}`);
});
app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto 3000");
});

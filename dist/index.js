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
    res.send(`Creates a new student with id ${req.body.id}`);
});
app.patch("/student/patchstudent/:id", (req, res) => {
    res.send(`Update this parts of the product with id ${req.params.id}: ${req.body.status}, ${req.body.nombre} `);
});
app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto 3000");
});

import express, { Request, Response } from "express";
const morgan = require("morgan");
const PORT = 3000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/student/getallstudents", (req: Request, res: Response) => {
  res.send("Get all students");
});

app.post("/student/createstudent", (req: Request, res: Response) => {
  const studentId = req.body.id;
  res.send(`Creates a new student with id ${studentId}`);
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto 3000");
});

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
  const id = req.body.id;
  res.send(`Creates a new student with id ${id}`);
});

app.patch("/student/patchstudent/:id", (req: Request, res: Response) => {
  res.send(
    `Update this parts of the product with id ${req.params.id}: ${req.body.status}, ${req.body.nombre} `
  );
});

app.delete("/student/deletestudent/:id", (req: Request, res: Response) => {
  res.send(`Delete student with id ${req.params.id}`);
});

app.get("/student/getstudent/:id", (req: Request, res: Response) => {
  res.send(`Get student with id ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto 3000");
});

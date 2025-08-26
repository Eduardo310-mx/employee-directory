import express from "express";
import employees from "./db/employees.js"
const app = express();
export default app;

app.get("/", (req, res) => {
    res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
    res.send(employees);
});

app.get("/employees/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length);
    res.send(employees[randomIndex]);
});

app.route("/employees/:id").get((req, res) => {
    const { id } = req.params;
    const employee = employees.find((element) => element.id === +id);
    if (!employee) {
        return res.status(404).send("Not found");
    }
    res.send(employee);
});




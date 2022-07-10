const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);

        res.json(newTodo.rows[0]);
    }

    catch (err) {
        console.log(err.message);
    }
});

app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }

    catch (err) {
        console.log(err.message);
    }
}
);

app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todoid = $1", [id]);
        res.json(todo.rows[0]);
    }

    catch (err) {
        console.log(err.message);
    }
}
);

app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todoid = $2", [description, id]);
        res.json("Todo updated");
    }

    catch (err) {
        console.log(err.message);
    }
}
);

app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todoid = $1", [id]);
        res.json("Todo deleted");
    }

    catch (err) {
        console.log(err.message);
    }
}
);


app.listen(5000, () => {
    console.log("server has started on port 5000");
})
import express from "express";

const todosRouter = express.Router();

todosRouter.get("/todos", (req, res) => {
    res.send("All Todos");
});

todosRouter.get("/todos/:id", (req, res) => {
    const todoId = req.params.id;

    res.send(`Getting TODO with id ${todoId}`);
});

todosRouter.post("/todos", (req, res) => {
    res.json({id: 1, title: "Todo", description: "My todo"});
});

todosRouter.put("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    res.send(`Updating TODO with id ${todoId}`);
});

todosRouter.delete("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    res.send(`Deleting TODO with id ${todoId}`);
});

export default todosRouter;

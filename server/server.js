const PORT = process.env.PORT ?? 8000;  // Sets the port number based on the environment variable or defaults to 8000

const express = require('express');
const {v4:uuidv4} = require('uuid');
const cors = require('cors')
const app = express();
const pool = require('./db');  // Imports the PostgreSQL connection pool


app.use(cors())
app.use(express.json())

app.get('/todos/:userEmail', async (req, res) => {
  console.log(req);
  const {userEmail} = req.params;

  try {
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);  // Executes the query to fetch all rows from the "todos" table
    res.json(todos.rows);  // Sends the result as JSON
  } catch (error) {
    console.error(error);
  }
});

// create new todo
app.post('/todos', async (req, res) => {
  const { user_email, title, progress, date } = req.body;
  const id = uuidv4();
  try {
    const newToDo = await pool.query(
      `INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5);`,
      [id, user_email, title, progress, date]
    );
    res.json(newToDo);
  } catch (error) {
    console.error(error);
  }
});

// edit todo
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params
  const { user_email, title, progress, date } = req.body
  console.log({ user_email, title, progress, date,id },"hi");
  try {
    const editToDo = await pool.query(
      `UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5`,
      [user_email, title, progress, date, id]
    );
    res.json(editToDo);
  } catch (error) {
    console.error(error);
  }
});

//delete a todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleteToDo = await pool.query(
      `DELETE FROM todos WHERE id = $1`,
      [id]
    );
    res.json(deleteToDo);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));  // Starts the server and logs the port number

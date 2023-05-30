const PORT = process.env.PORT ?? 8000;  // Sets the port number based on the environment variable or defaults to 8000

const express = require('express');
const cors = require('cors')
const app = express();
const pool = require('./db');  // Imports the PostgreSQL connection pool

// app.get('/', (req, res) => {
//   res.send("hello");
// });
app.use(cors())

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

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));  // Starts the server and logs the port number

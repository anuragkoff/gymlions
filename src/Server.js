const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
// app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'signup'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM your_table';
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
});
const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'user',
    password: 'userpass',
    database: 'myapp'
});

app.get('/', (req, res) => {
    res.json({ message: 'Node.js API is running' });
});

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Node.js app running on port 3000');
});
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const port = 5000;

// This line will set the database hostname depending on the NODE_ENV variable.
// This variable is set when the application is launched in the docker container.
const envHost = (process.env.NODE_ENV == 'production' ? 'database' : 'localhost');

const connection = mysql.createConnection({
    host: envHost,
    user: '',
    password: '',
    database: ''
});

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api', (req, res) => {
    console.log('APIs API called...')

    const api_calls =
        [
            { id: 1, link: '/api/test' }
        ];
    res.json(api_calls);
});

app.get('/api/test', (req, res) => {
    console.log('test API called...');

    var papers = [];
    // connection.query('SELECT * FROM paper', (err, rows, fields) => {
    //     if (err) throw err;

    //     // Adding all papers to array
    //     for (var i = 0; i < rows.length; i++) {
    //         papers.push({ paperNo: rows[i].paperNo, paperName: rows[i].paperName, paperCode: rows[i].paperCode });
    //     }

    //     res.json(papers);
    // })
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.listen(port, () => console.log('Server started on port ' + port));
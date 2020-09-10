const express = require('express');
const database = require('./technologies')
const app = express();
app.use(express.json());
const port = 3001;


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.get('/api/technologies/:id?', (req, res) => {
    res.send(database.getData(req.params.id));    
});

app.delete('/api/technologies/:id?', (req, res) => {
  res.send(database.deleteData(req.params.id));    
});

app.post('/api/technologies', (req, res) => {
    database.addData(req.body);    
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
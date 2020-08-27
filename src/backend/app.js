const express = require('express');
const getTechnologies = require('./technologies')
const app = express();
const port = 3001;



app.get('/api/technologies/:id?', (req, res) => {
    res.send(getTechnologies(req.params.id));    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const getTechnologies = require('./technologies')
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World! Is nodemon working? Is it working now? Yeees')
})

// app.get('/api/technologies', (req, res) => {
//     res.send(getTechnologies());
// });

app.get('/api/technologies/:id?', (req, res) => {
    let technologies = getTechnologies();
    if(req.params.id) {
       let technology = technologies.find(technology => technology.id == req.params.id)
        res.send(technology); 
    } else {
        res.send(technologies);
    }
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
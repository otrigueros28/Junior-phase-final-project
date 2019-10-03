const express = require('express');
const app = express();
const { syncAndSeed, models } = require('./db');
const { School, Student } = models
const path = require('path')
const port =  process.env.PORT || 3000;

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/api/schools', (req, res, next) => {
   School.findAll()
    .then(student => res.json(student))
    .catch(next);
});


app.get('/api/students', (req, res, next) =>{
  Student.findAll()
    .then(student => res.json(student))
    .catch(next);
})

app.listen(port, () => console.log(`listening on port ${port}`));

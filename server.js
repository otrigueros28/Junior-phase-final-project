const express = require('express');
const app = express();
const { syncAndSeed, models } = require('./db');
const { School, Student } = models
const path = require('path')
const port =  process.env.PORT || 3000;

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, 'dist')));
syncAndSeed();

app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
});

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



app.put('/api/students/:id', async (req, res, next) =>{
  Students.update({where: {id: req.params.id}})
    .then( student => res.json(student))
    .catch(next)
})


app.post('/api/students', async(req, res, next)=> {
  try {
    res.send(await Student.create(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/api/students/:id', async(req, res, next)=> {
  try {
    await Student.destroy(req.params.id);
    res.sendStatus(204);
  }
  catch(ex){
    next(ex);
  }
});



app.listen(port, () => console.log(`listening on port ${port}`));

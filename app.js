const express = require('express')
const app = express()

let tasks = [
            {
               id: 1,
               title: "Task 1",
               status: "in-progress"
            }
];

app.use(express.json())

//body parser
app.use(express.json());

app.get('/', function(req,res){
   res.send('hello world, hello zeynep, hello 1 2 3 4 5')                           
});

app.get('/app',function(req,res){
    res.send('/app endpoint');                          
});

app.get('/tasks',function(req,res){
  // res.send('Tasks get request')
  res.json(tasks);
})

app.post('/tasks',function(req,res){
    const task = req;  
    //console.log(req.body);
    tasks.push(task);
    res.json(tasks);                        
});


app.listen(3000);
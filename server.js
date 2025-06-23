const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
app.use(cors())
app.use(express.json())

let students=[
    {id:1, name:'Praharsha', stuclass:3},
    {id:2,name:'Prakarsha', stuclass:4},
];

app.get('/api/students',(req,res)=>{
    res.json(students);
});

app.post('/api/students',(req,res)=>{
    const newStudent=req.body;
    newStudent.id=students.length+1;
    students.push(newStudent);
    res.json(newStudent);
});
const PORT=4000;
app.listen(PORT,()=>{
    console.log('Server running');
})

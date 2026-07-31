import express from "express"
import dotenv from "dotenv"


const app= express();

app.get("/doctors",(req,res)=>{   ///all doctors
    res.send("welcome to expressjs").status(200).json({message:"appointment created"})
})
app.get("/student",(req,res)=>{
    res.json({
    id:1,
    name:"Rhythm",
    course:"MERN stack"
    })
})
app.get("/route",(req,res)=>{
    res.send("welcome to server")
})
app.get("/about",(req,res)=>{
    res.send("welcome to about us page ")
})
app.get("/employee",(req,res)=>{
    res.json({
        id: 2,
        name: "Rhythm",
        role: "MERN stack developer",
        salary: 20000
    })
})


// data post (POST)

app.post("/create",(req,res)=>{
    res.send("post created")
})


//PUT 
app.put("/appointments/:ID",(req,res)=>{
    res.send("appointment updated")
})


///Delete
app.delete("/appointments/:1",(req,res)=>{
    res.send("appointment deleted")
})

app.get("/doctors/:id",(req,res)=>{
    res.send(req.params.id)
})

// multiple parameters 
app.get("/appointments/:id/name",(req,res)=>{
    res.send(req.params)
})

// query parameters 
app.get("/d",(req,res)=>{
    res.json(req.query)
})



const PORT1=process.env.PORT || 3000;

app.listen(PORT1,()=>{
    console.log(`Server running on port ${PORT1}`)
})



// create crud operations 
//create
app.post("/students",(req,res)=>{
    db.query(
        "Insert INTO students(name, email,age) VALUES(?,?,?)",
        {
            req.body.name,
            req,body,email,
            req.body.age
        }
    )
    res.status(201).json({
        message:"student created"
    })
})

// get students 
app.get("/students",(req,res)=>{
    const [students] = db.query(
        "SELECT * FROM STUDENTS"
    );
    res.json(students)
})


// update the students 
app.put("/students/:1",(req,res)=>{
    db.query(
        "UPDATE students SET name=? where id =?",
        [
            req.body.name,
            req.params.id
        ]
    )
    ///
})

//delete 
app.delete("/students/:1",(req,res)=>{
    "DELETE FROM students WHERE id=?",
    [
        req.params.id
    ]
})

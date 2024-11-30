require('dotenv').config() 
const express = require("express")
const path = require('path');
const mongoose = require("mongoose")
const skillsRoutes = require("./routes/skills")
const experiencesRoutes = require("./routes/experiences")
const educationsRoutes = require("./routes/educations")
const projectsRoutes = require("./routes/projects")
const messagesRoutes = require("./routes/messages")
const cors = require('cors');


//express app
const app = express()

//cors
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders:  ['Content-Type', 'Authorization'],
  };
  app.options('*', cors(corsOptions));
  app.use(cors(corsOptions));

//middleware
app.use(express.json())

// Serve static files from the 'public' folder
app.use('/icons', express.static(path.join(__dirname, 'public', 'icons')));

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/messages', messagesRoutes)
app.use('/api/projects', projectsRoutes)
app.use('/api/skills', skillsRoutes)
app.use('/api/experiences', experiencesRoutes)
app.use('/api/educations', educationsRoutes)

//connect to db
mongoose.connect(process.env.DB_CONNECTION)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT,() => {
    console.log('connected to db , listening on port 4000')
})
}).catch((error) => {
    console.log(error)
})

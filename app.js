const express = require('express')

const app = express()

const mongoose = require('mongoose')
//3rqTboTFE4zJTvGn
const PORT = 5000
const {MONGOURI} =  require('./key')


require('./models/user')
//mongoose.model("User",userSchema)


app.use(express.json())
app.use(require('./routes/auth'))

// to regiester of our routes


// for connecting the mongoose data base
mongoose.connect(MONGOURI , {
     useNewUrlParser: true,
     useUnifiedTopology: true 
 })
// for showing the conncetions of the data Base
mongoose.connection.on('connected', ()=>{
    console.log("Connected to mongoDB yeah!")
})
// If the DataBase is not connected to then it's shows the error
mongoose.connection.on('error', (err)=>{
    console.log("Connecting",err)
})


// const customMiddleware = (req , res , next) =>{
//  console.log("middleware executed!!")
//  next()
// }



// app.get('/', (req, res)=>{
//     console.log("home")
//     res.send("Hello world")
// })

// app.get('/about',customMiddleware, (req, res)=>{
//     console.log("about")
//     res.send("About Page")
// })




app.listen(PORT, ()=>{
    console.log("Server is running on", PORT)
})
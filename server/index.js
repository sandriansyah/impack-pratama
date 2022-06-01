const express = require('express')

const cors = require('cors')
const app = express()

const port = 5000

app.use(express.json())

const router = require('./src/routes')

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use(cors())
app.use('/api/v1/',router)


app.listen(port,console.log(`server listen on port ${port}`))
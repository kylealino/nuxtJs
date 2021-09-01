const express = require('express')

const app = express()

let users = require('./assets/uploads/MOCK_DATA.json')

console.log(users)
app.use(express.json())

app.post('/api/auth/login', async (req,res) =>{
    try {
        
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})
module.exports={
    path:"/",
    handler:app,
}

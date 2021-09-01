const express = require('express')

const app = express

let users = require('/assets/MOCK_DATA.json')

app.use(express.json())

app.post('/api/auth/Login', async(req,res)=>{

})
module.exports={
    path:"/",
    handler:app
}
const express = require('express'); 
const app = express()
const mongoose = require('mongoose')
// const dburl = ""
// mongoose.connect(dburl).then(()=>{
//     console.log("db connected")
// }).catch((err)=>{
//     console.log(err)
// })

app.listen(4000, ()=>{
    console.log('server running')
})




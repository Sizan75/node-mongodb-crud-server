const express = require('express');
const cors = require('cors');
const app=express();
const port= process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('hello from node mongo db crud')
})
// inisial comment
app.listen(port,()=>{
    console.log(`Server running from port ${port}`)
})
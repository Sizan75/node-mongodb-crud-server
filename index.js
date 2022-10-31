const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express();
const port= process.env.PORT || 5000;

app.use(cors())
app.use(express.json())



const uri = "mongodb+srv://dbUser75:DrdWlkvqq9d2pyYQ@cluster0.bahxlpw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
try{
const userCollection= client.db('nodemongodbcrudserver').collection('users')

app.get('/users',async(req,res)=>{
    const query={};
    const cursor= userCollection.find(query)
    const users=await cursor.toArray()
    res.send(users)
})

app.post('/users',async(req,res)=>{
    const user=req.body;
    console.log(user)
    const result= await userCollection.insertOne(user)
    res.send(user)
})
}
finally{

}
}
run().catch(error=> console.log(error))


app.get('/',(req,res)=>{
    res.send('hello from node mongo db crud')
})
// inisial comment
app.listen(port,()=>{
    console.log(`Server running from port ${port}`)
})
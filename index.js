import express from 'express';
import mongoose from 'mongoose';

import graphqlHTTP from 'express-graphql';
import schema from './graphql';

const app = express();

mongoose.connect('mongodb://<user>:123456@ds149353.mlab.com:49353/graphapi')
const db = mongoose.connection;

db.on('error' ,()=>{console.log('Failed to connect to database')})
   .once('open',()=>{console.log('connect to db')})
app.get('/',(req,res)=>{
    res.send("hello world,this is the graphql api;")
})

app.use('/graphql',graphqlHTTP(()=>({
    schema,
    graphiql:true,
    pretty:true
})))

app.listen(3000,()=>{
    console.log('Graphql API Running at port 3000')
})
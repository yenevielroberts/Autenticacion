import express from 'express';
import {PORT, SECRET_JWT_KEY} from './config.js'



const app=express();
app.use(express.json());
app.use(express.static("public"))

app.set('view engine', 'ejs')
app



app.listen(PORT,()=>console.log(`Server listening on http://localhost:${PORT}`))
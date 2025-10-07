import express from 'express';
import { PORT, SECRET_JWT_KEY } from './config.js'
import { UserRepository } from './user-repository.js';


const app = express();

app.use(express.json());//Se puede utilizar este en vez de bodyparse()
app.use(express.static("public"))
app.set('view engine', 'ejs')//Quiere decir que quiero usar este motor
app.set('views', './views')//Le digo donde estarán las vistas


app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))

//Inicio de los endpoints

app.get('/', (req, res) => {

    res.render("signupForm")
})


app.post ('/signup',async (req, res)=>{
    console.log("cuerpo",req.body)

    const {username, password}=req.body//Obtengo los valores del body enviado en el json
    try{
        const id= await UserRepository.create({username, password});
        res.send({id})
    }catch(error){
        res.status(400).send(error.message)
    }
    
})
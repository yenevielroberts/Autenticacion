import express from 'express';
import { PORT, SECRET_JWT_KEY } from './config.js'


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

app.post('/signup',(req, res)=>{

    const {username, password}=req.body//Obtengo los valores del body enviado en el json
    
})
import express,{Response,Request} from 'express'
import routerMensaje from '../routes/mensaje';
import sequelize, { DATABASE, HOST, PASSWORD, PORT, USER } from '../db/connection';
import cors from 'cors'


class Server{
private app:express.Application;
private port;

constructor(){
    this.app = express();
    this.port = PORT;
    this.listen();
    this.midlewares();
    this.routes();
    this.dbconect();
}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        console.log(DATABASE);
        console.log(HOST)
        console.log(USER)
        console.log(PASSWORD)
    })
}

 routes() {
    this.app.get('/',(req:Request,res:Response)=>{
    res.json({
    message:'Api Working'
    })
    this.app.use('/api/formulario',routerMensaje)
})
    
}


midlewares(){
    //parseamos el body
    this.app.use(express.json());

    //cors 
    this.app.use(cors())

}

async dbconect(){
try {
    await sequelize.authenticate()
    console.log('Base de Datos Conectada');
} catch (error) {
    console.log('Error al conectar la base de datos');
    console.log(error);
}

}

}

export default Server
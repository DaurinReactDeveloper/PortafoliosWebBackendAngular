import {Response,Request} from 'express'
import Message from '../Models/message'

export const getMessages = async (req:Request,res:Response)=>{

try {
    const listadoMensajes = await Message.findAll()
    res.json(listadoMensajes)
} catch (error) {

    console.log(error)
res.json({
    message: 'Ha Ocurrido un Error'
})}

}

// export const getMessage = (req:Request,res:Response)=>{
// const {id} = req.params;

//     res.json({
//         message:"Soy el que trae el id",
//         id: id
//     })
// }

export const addMessage = async (req:Request,res:Response)=>{
    const {body} = req;
    
try {
    await Message.create(body)
    res.json({
        message:'Creado'
    })
} catch (error) {
   console.log(error)
   res.json({
    message:'Ha Ocurrido un Error'
   }) 
}

   
}
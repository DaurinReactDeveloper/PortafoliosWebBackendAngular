import { DataTypes} from 'sequelize'
import Conexion from '../db/connection'

const Message = Conexion.define('message_tablets',{
id:{type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
name:{type:DataTypes.STRING},
email:{type:DataTypes.STRING},
message:{type:DataTypes.STRING}
},{
    createdAt:false,
    updatedAt:false
})

export default Message
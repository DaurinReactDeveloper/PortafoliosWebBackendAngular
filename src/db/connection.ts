import { Sequelize } from 'sequelize';

export const PORT = process.env.PORT || "3006";
export const HOST = process.env.HOST || "bd4jeujm6mjiwysf9c71-mysql.services.clever-cloud.com";
export const USER = process.env.USER || "umx9gui0qguradir";
export const PASSWORD = process.env.PASSWORD || "UGAhPuk5JVTMKnngOJ7f";
export const DATABASE = process.env.DATABASE || "bd4jeujm6mjiwysf9c71";

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST, 
    dialect: 'mysql',
});

export default sequelize;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE = exports.PASSWORD = exports.USER = exports.HOST = exports.PORT = void 0;
const sequelize_1 = require("sequelize");
exports.PORT = process.env.PORT || "3006";
exports.HOST = process.env.HOST || "bd4jeujm6mjiwysf9c71-mysql.services.clever-cloud.com";
exports.USER = process.env.USER || "umx9gui0qguradir";
exports.PASSWORD = process.env.PASSWORD || "UGAhPuk5JVTMKnngOJ7f";
exports.DATABASE = process.env.DATABASE || "bd4jeujm6mjiwysf9c71";
const sequelize = new sequelize_1.Sequelize(exports.DATABASE, exports.USER, exports.PASSWORD, {
    host: exports.HOST,
    dialect: 'mysql',
});
exports.default = sequelize;

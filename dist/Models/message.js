"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Message = connection_1.default.define('message_tablets', {
    id: { type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: { type: sequelize_1.DataTypes.STRING },
    email: { type: sequelize_1.DataTypes.STRING },
    message: { type: sequelize_1.DataTypes.STRING }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Message;

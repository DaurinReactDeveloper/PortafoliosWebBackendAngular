"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensajes_1 = require("../controllers/mensajes");
const router = (0, express_1.Router)();
router.get('/', mensajes_1.getMessages);
// router.get('/:id',getMessage)
router.post('/', mensajes_1.addMessage);
exports.default = router;

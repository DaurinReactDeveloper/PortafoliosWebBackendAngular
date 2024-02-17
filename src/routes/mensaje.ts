import {Router} from 'express'
import { addMessage, getMessages  } from '../controllers/mensajes';


const router = Router();

router.get('/',getMessages)
// router.get('/:id',getMessage)
router.post('/',addMessage)

export default router;
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';
import DelivereController from './app/controllers/DelivereController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.post('/delivere', upload.single('file'), DelivereController.store);
routes.post('/order', OrderController.store);
routes.use(authMiddleware);

// DESTINATARIOS //
routes.post('/recipient', RecipientController.store);
routes.put('/recipient', RecipientController.update);

// ENTREGADORES //

routes.get('/delivere', DelivereController.index);
routes.put('/delivere', DelivereController.update);
routes.delete('/delivere', DelivereController.delete);

// GESTÃO DE ENCOMENDA //
// routes.post('/order', OrderController.store);
//routes.post('/delivere', DelivereController.store);
export default routes;
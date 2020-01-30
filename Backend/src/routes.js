import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';
import DelivereManagementController from './app/controllers/DelivereManagementController';
import OrderManagementController from './app/controllers/OrderManagementController';
import ProblemController from './app/controllers/ProblemController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.post('/delivere', upload.single('file'), DelivereManagementController.store);

routes.use(authMiddleware);

// DESTINATARIOS //
routes.post('/recipient', RecipientController.store);
routes.put('/recipient', RecipientController.update);

// ENTREGADORES //
routes.get('/delivere', DelivereManagementController.index);
routes.put('/delivere', DelivereManagementController.update);
routes.delete('/delivere', DelivereManagementController.delete);

// GESTÃO DE ENCOMENDA //
routes.post('/order', OrderManagementController.store);
routes.get('/order', OrderManagementController.index);
routes.put('/order', OrderManagementController.update);
routes.delete('/order', OrderManagementController.delete);

// Problemas
routes.get('/problem', ProblemController.index);

export default routes;

import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';
import DelivereManagementController from './app/controllers/DelivereManagementController';
import DelivereController from './app/controllers/DelivereController';
import OrderManagementController from './app/controllers/OrderManagementController';
import ProblemController from './app/controllers/ProblemController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.post(
  '/delivere',
  upload.single('file'),
  DelivereManagementController.store
);

routes.use(authMiddleware);

// GESTAO DE DESTINATARIOS //
routes.post('/recipient', RecipientController.store);
routes.put('/recipient', RecipientController.update);

// GESTAO DE ENTREGADORES //
routes.post('/delivere', DelivereManagementController.store);
routes.get('/delivere', DelivereManagementController.index);
routes.put('/delivere/:id', DelivereManagementController.update);
routes.delete('/delivere/:id', DelivereManagementController.delete);

// GESTÃO DE ENCOMENDA //
routes.post('/order', OrderManagementController.store);
routes.get('/order', OrderManagementController.index);
routes.put('/order', OrderManagementController.update);
routes.delete('/order', OrderManagementController.delete);

// ENTREGADORES //
routes.get('/deliveryman/:id/deliveries', DelivereController.index);

// PROBLEMAS
routes.get('/problem', ProblemController.index);

export default routes;

import { Router } from 'express';

import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.put('/recipient', RecipientController.update);
routes.use(authMiddleware);

//Destinatarios

routes.post('/recipient', RecipientController.store);

export default routes;

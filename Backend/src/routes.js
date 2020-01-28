import { Router } from 'express';

import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
export default routes;

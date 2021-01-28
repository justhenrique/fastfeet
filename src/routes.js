import { Router } from 'express';

import SessionController from './app/controller/SessionsController';
import RecipientsController from './app/controller/RecipientsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();


// TESTE
routes.get('/', (req, res) => {
  res.json({message: "HelloWorld Test"})
});


// Login 
routes.post('/sessions', SessionController.store);

// Middleware only to adminUser
routes.use(authMiddleware);

// Create Users
routes.post('/recipients', RecipientsController.store);

// Update Recipientes
routes.put('/recipients', RecipientsController.update);



export default routes;
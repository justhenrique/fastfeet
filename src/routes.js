import { Router } from 'express';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionsController';
import RecipientsController from './app/controller/RecipientsController';

const routes = new Router();


// TESTE
routes.get('/', (req, res) => {
  res.json({message: "HelloWorld Test"})
});

// Login 
routes.post('/sessions', SessionController.store);

// Create Users
routes.post('/recipients', RecipientsController.store);





export default routes;
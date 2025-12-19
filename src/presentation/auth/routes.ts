import { Router } from 'express';
import { AuthContoller } from './controller';




export class AuthRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new AuthContoller();
    
    // Definir las rutas
    router.post('/login', controller.loginUser );
    router.post('/register', controller.registerUser );
    router.get('/validate-email/:token', controller.validateEmail);



    return router;
  }


}


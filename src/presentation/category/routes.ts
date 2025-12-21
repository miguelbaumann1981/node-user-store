import { Router } from 'express';
import { CategoryContoller } from './controller';




export class CategoryRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new CategoryContoller();
    
    // Definir las rutas
    router.get('/',  controller.getCategories);
    router.post('/',  controller.createcategory);



    return router;
  }


}


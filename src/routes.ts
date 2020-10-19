import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import OrphanagesControllers from './controllers/OrphanagesControllers';

const routes = Router();
const upload = multer(uploadConfig);



routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages', upload.array('images'), OrphanagesControllers.create);


export default routes;

/*
{
	"name": "Lar São Vicente",
	"latitude": -27.2104339,
	"longitude": -49.629111,
	"about": "Sobre o orfanato",
	"instructions": "Venha nos visitar",
	"opening_hours": "Das 8h até 18h",
	"open_on_weekends": true
}
*/
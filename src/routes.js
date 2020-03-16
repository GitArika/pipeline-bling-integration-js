import { Router } from 'express';
import DealController from './app/controllers/DealController';
import PedidoController from './app/controllers/PedidoController';
import SummaryController from './app/controllers/SummaryController';

const routes = new Router();

routes.get('/pipeline/deals', DealController.index);

routes.post('/bling/pedidos', PedidoController.store);

routes.get('/summary', SummaryController.index);

export default routes;

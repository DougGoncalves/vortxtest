import { Router } from 'express';
import Calculation from './app/controller/CalculationController';

const routes = new Router();

routes.post('/', Calculation.store);

export default routes;

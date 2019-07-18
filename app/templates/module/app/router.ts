import { Application } from 'egg';
import AdminRouter from './router/admin';

export default (app: Application) => {
    const { router, controller } = app;

    router.get('/', controller.home.index);
    router.get('/status.ok', controller.home.status);

    AdminRouter(app);

    router.all('*', controller.home.all);
};

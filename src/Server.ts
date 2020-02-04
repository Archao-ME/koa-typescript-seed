import { RouterModuleImp } from './entity/Router';
import * as logger  from 'koa-logger';

export class Server {
    app;
    router;

    constructor(Koa, Router) {
        this.app = new Koa();
        this.router = new Router();
    }

    setupRouter(routerModules: RouterModuleImp[]) {
        routerModules.forEach((router) => {
            router.setup(this.router);
        });
        this.app.use(this.router.routes());
        this.app.use(this.router.allowedMethods());
    }

    setupLogger() {
        this.app.use(logger());
    }

    listenApp(port) {
        this.app.listen(port);
        console.log('Koa listening: ' + port);
    }

    closeService() {
        this.app.close();
    }

    getApp() {
        return this.app;
    }
}

import { RouterModuleImp } from '../entity/Router';

export class IndexRouter implements RouterModuleImp {
    setup(router) {
        router.get('/', (ctx, next) => {
            ctx.body = 'Hello World!';
        });
    }
}

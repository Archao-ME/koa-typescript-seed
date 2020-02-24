export class IndexRouter {
    setup(router) {
        router.get('/', (ctx, next) => {
            ctx.body = 'Hello World!';
        });
    }
}

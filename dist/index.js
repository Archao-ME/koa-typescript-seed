"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
class Index {
    constructor() {
        this.app = new Koa();
        this.router = new Router();
        this.setupRouter();
        this.setupApp();
        this.listenApp();
    }
    setupApp() {
        this.app.use(this.router.routes());
        this.app.use(this.router.allowedMethods());
    }
    setupRouter() {
        this.router.get('/', (ctx, next) => {
            ctx.body = 'Hello World!';
        });
    }
    listenApp(port) {
        this.app.listen(port);
    }
    closeService() {
        this.app.close();
    }
    getApp() {
        return this.app;
    }
}
exports.Index = Index;
const index = new Index();

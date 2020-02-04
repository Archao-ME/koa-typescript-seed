import * as Koa from 'koa';
import * as Router from 'koa-router';

import { Server } from './Server';
import { routerModules } from './router';

const server = new Server(Koa, Router);


server.setupLogger();
server.setupRouter(routerModules);
server.listenApp(3000);

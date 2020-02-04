import * as Koa from 'koa';
import * as Router from 'koa-router';

import { Server } from './Server';
import { routerModules } from './router';

import * as config from './config';

const env = process.env.NODE_ENV || 'prod';
const envConfig = config[env];

const server = new Server(Koa, Router);

server.setupLogger();
server.setupRouter(routerModules);
server.listenApp(envConfig.port);

import * as Koa from 'koa';
import * as Router from 'koa-router';

import { Server } from './Server';

class MockUserRouter {
    setup() {}
}

describe('Server', () => {
    it('Should setup be called in router module when call Server.setupRouter', () => {
        const server = new Server(Koa, Router);
        const mockUserRouter = new MockUserRouter();
        spyOn(mockUserRouter, 'setup');

        server.setupRouter([mockUserRouter]);

        expect(mockUserRouter.setup).toBeCalled();
    });

});

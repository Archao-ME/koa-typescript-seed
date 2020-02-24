import { RouterImp } from './RouterImp';
import { UserUseCase } from '../usecase/UserUseCase';
import { UserRepository } from '../repository/UserRepository';
import { IDB } from '../db/IDB';

export class UserRouter implements RouterImp {
    db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }

    setup(router) {
        const userUsecase = new UserUseCase(new UserRepository(this.db));
        router.get('/users', ctx => {
            const res = userUsecase.getUsers();
            console.log(res);
            ctx.body = res;
        });
    }
}

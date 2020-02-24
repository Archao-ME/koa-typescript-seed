import { UserEntity } from '../entity/UserEntity';
import { IDB } from '../db/IDB';

interface IUserRepository extends UserEntity {}

export class UserRepository {
    db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    findUsers(): IUserRepository[] {
        return this.db.findUsers();
    }
}

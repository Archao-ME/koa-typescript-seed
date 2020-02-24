import { UserRepository } from './UserRepository';
import { UserEntity } from '../entity/UserEntity';
import { IDB } from "../db/IDB";

class DB {
    findUsers(): UserEntity[] {
        return [{
            userId: '',
            openId: '',
            nickname: '',
            avatar: ' ',
            regTime: '',
            phone: 123
        }];
    }
}
const db = new DB();

describe('UserRepository', () => {
    it('should findUsers return array', () => {
        const repository = new UserRepository(db as IDB);

        expect(repository.findUsers()).toBeInstanceOf(Array);
    });

    it('should findUsers call db.findUsers', () => {
        const repository = new UserRepository(db as IDB);
        spyOn(db, 'findUsers');

        repository.findUsers();

        expect(db.findUsers).toHaveBeenCalled();
    });
});

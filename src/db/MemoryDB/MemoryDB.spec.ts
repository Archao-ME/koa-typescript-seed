import { MemoryDB } from './MemoryDB';
import { UserEntity } from '../../entity/UserEntity';

describe('MemeoryDB', () => {
    it('should have init data', () => {
        const userTable: UserEntity[] = [{
            avatar: '',
            nickname: 'first user',
            openId: '',
            phone: 0,
            regTime: '',
            userId: ''
        }];

        const database = {
            userTable
        };

        const memoryDB = new MemoryDB({
            database
        });

        expect(memoryDB.getDatabase()).toStrictEqual(database);
    });
});

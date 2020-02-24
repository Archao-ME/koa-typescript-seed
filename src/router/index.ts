import { IndexRouter } from './IndexRouter';
import { UserRouter } from './UserRouter';
import { UserEntity } from '../entity/UserEntity';
import { IMemoryDatabaseOption, MemoryDB } from '../db/MemoryDB/MemoryDB';

const initUser: UserEntity = {
    avatar: 'avater',
    nickname: 'nickname',
    openId: 'openId',
    phone: 9950,
    regTime: '',
    userId: ''
};
const userTable: UserEntity[] = [initUser];
const memoryOption: IMemoryDatabaseOption = {database: {userTable}};

const db = new MemoryDB(memoryOption);

export const routerModules = [new IndexRouter(), new UserRouter(db)];


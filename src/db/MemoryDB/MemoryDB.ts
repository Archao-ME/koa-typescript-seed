import { UserEntity } from '../../entity/UserEntity';
import { IDB } from '../IDB';

export interface IDatabase {
    userTable: UserEntity[];
}

export interface IMemoryDatabaseOption {
    database: IDatabase;
}

export class MemoryDB implements IDB {

    database: IDatabase;

    constructor(option: IMemoryDatabaseOption) {
        this.database = option.database;
    }

    findUsers() {
        const res = this.database.userTable;
        return res;
    }

    updateUser() {
    }

    getDatabase() {
        return this.database;
    }
}

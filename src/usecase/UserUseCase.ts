import { UserRepository } from '../repository/UserRepository';

export class UserUseCase {
    repository: UserRepository;
    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    getUsers() {
        return this.repository.findUsers();
    }
}

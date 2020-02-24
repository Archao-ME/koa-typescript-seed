import { UserUseCase } from './UserUseCase';
import { UserRepository } from '../repository/UserRepository';

describe('UserUseCase', () => {
    it('should getUsers call userRepository.findUsers', () => {
        const userRepository = {
            findUsers: () => {}
        } as UserRepository;
        spyOn(userRepository, 'findUsers');

        const userUseCase = new UserUseCase(userRepository as UserRepository);
        userUseCase.getUsers();

        expect(userRepository.findUsers).toHaveBeenCalled();
    });
});

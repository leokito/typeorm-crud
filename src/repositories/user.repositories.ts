import {EntityRepository, Repository} from 'typeorm'
import { User } from '../entities/user.entity';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async search_by_email(email: string): Promise< User | undefined > {
        const user = await this.findOne({
            where: {
                email,
            },
        });
        return user;
    }
}

export default UserRepository;
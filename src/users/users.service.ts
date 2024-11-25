import { Injectable } from '@nestjs/common';


export type User = {
    id: number;
    email: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            email: 'miguel.velasco@gmail.com',
            username: 'Miguel',
            password: 'soymiguel'
        },
        {
            id: 2,
            email: 'inaki.echaburu@gmail.com',
            username: 'Inaki',
            password: 'soyinaki'
        }
    ]

    async findUser(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email == email);
    }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {

    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(email);

        if (user && user.password === password) {
            const { password, ...rest} = user;
            return rest;
        }

        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id};

        return {
            acces_token: this.jwtService.sign(payload),
        }
    }
}

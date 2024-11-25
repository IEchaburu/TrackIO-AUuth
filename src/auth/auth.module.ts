import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET', // solo para prueba, va en env.
    signOptions: {expiresIn: '120s'},
  })],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}

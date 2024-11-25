import { Controller, Get, UseGuards, Post, Request, Body, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}


  // probablemente a eliminar = @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() body: { email: string; password: string}): Promise<any> {
    const user = await this.authService.validateUser(body.email, body.password);

    if (!user) {
      throw new UnauthorizedException('Login Invalido');
    }

    return this.authService.login(user);
  }

 @UseGuards(JwtAuthGuard) 
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}

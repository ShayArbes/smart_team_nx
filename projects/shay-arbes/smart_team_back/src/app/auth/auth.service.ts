import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(email, pass) {
    const user = await this.usersService.findOneByEmail(email);
    const validPassword = await bcrypt.compare(pass, user.password);

    if (!validPassword) {
      throw new Error('Invalid password');
    }
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    const payload = {
      id: user.user_id,
      username: user.username,
      email: user.email,
    };
    return await this.jwtService.signAsync(payload);
  }
}

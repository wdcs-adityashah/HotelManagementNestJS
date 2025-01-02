import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AdminService {
  constructor(private configService: ConfigService) {}

  async validateAdmin(email: string, password: string): Promise<string> {
    const adminEmail = this.configService.get<string>('ADMIN_EMAIL');
    const adminPassword = this.configService.get<string>('ADMIN_PASSWORD');

    const isPasswordValid = password === adminPassword;

    if (email === adminEmail && isPasswordValid) {
      return this.generateToken(email);
    }
    throw new UnauthorizedException('Invalid email or password');
  }

  private generateToken(email: string): string {
    const payload = { email };
    const secret =
      this.configService.get<string>('JWT_SECRET') || 'your_jwt_secret';
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    return token;
  }
}

import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.usersService.register(registerDto);
    return {
      success: true,
      user,
    };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.usersService.login(loginDto);
  }

  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Patch('block/:id')
  async blockUser(@Param('id') id: string) {
    return await this.usersService.blockUser(id);
  }

  @Patch('unblock/:id')
  async unblockUser(@Param('id') id: string) {
    return await this.usersService.unblockUser(id);
  }

  @Get('blocked')
  async getBlockedUsers() {
    return await this.usersService.getBlockedUsers();
  }
}

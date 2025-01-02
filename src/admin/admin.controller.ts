import { Controller, Post, Body, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Response } from 'express';
import { AdminLoginDto } from './dto/admin-login.dto';

@Controller('admin/auth')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('login')
  async login(@Body() adminLoginDto: AdminLoginDto, @Res() res: Response) {
    const token = await this.adminService.validateAdmin(
      adminLoginDto.email,
      adminLoginDto.password,
    );
    return res.status(200).send({ token });
  }
}

import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { RegisterDto } from '../auth/dto/register.dto';
import { LoginDto } from '../auth/dto/login.dto';
import { Role } from 'src/auth/role.enum';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      throw new ConflictException('User Already Exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role =
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
        ? Role.ADMIN
        : Role.USER;

    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const savedUser = await newUser.save();
    console.log('Saved User:', savedUser);

    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: savedUser._id, name: savedUser.name, email: savedUser.email },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '1h' },
    );
    console.log('Generated Token:', token);
    const responsePayload = {
      token,
      userId: savedUser._id,
      session: {
        user: {
          id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
          role: savedUser.role,
        },
      },
    };

    console.log('Response Payload:', responsePayload);
    return responsePayload;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('No record found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ConflictException('Password is incorrect');
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '1h' },
    );
    return { token, userId: user._id, name: user.name, email: user.email };
  }

  async blockUser(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User  not found');
    }
    user.blocked = true;
    await user.save();
    return { message: 'User  blocked successfully' };
  }

  async unblockUser(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User  not found');
    }
    user.blocked = false;
    await user.save();
    return { message: 'User  unblocked successfully' };
  }

  async getUsers() {
    return await this.userModel.find();
  }

  async getBlockedUsers() {
    return await this.userModel.find({ blocked: true });
  }
}

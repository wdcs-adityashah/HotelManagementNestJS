import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from 'src/auth/role.enum';

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
  })
  name: string;
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  password: string;
  @Prop({
    type: Boolean,
    default: false,
  })
  blocked: boolean;
  @Prop({
    enum: Role,
    default: Role.USER,
  })
  role: Role;
}
export const UserSchema = SchemaFactory.createForClass(User);

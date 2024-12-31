import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}
export const UserSchema = SchemaFactory.createForClass(User);

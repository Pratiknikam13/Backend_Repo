import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserPreference extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, unique: true, match: /\S+@\S+\.\S+/ })
  email: string;

  @Prop({
    type: Object,
    required: true,
    default: {
      marketing: false,
      newsletter: false,
      updates: false,
      frequency: 'never',
      channels: { email: false, sms: false, push: false },
    },
  })
  preferences: Record<string, any>;

  @Prop({ required: true })
  timezone: string;

  @Prop({ default: Date.now })
  lastUpdated: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);

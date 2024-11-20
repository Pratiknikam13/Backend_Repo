import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './user-preference.schema';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private readonly userPreferenceModel: Model<UserPreference>,
  ) {}

  async createPreference(data: Partial<UserPreference>): Promise<UserPreference> {
    const newPreference = new this.userPreferenceModel(data);
    return newPreference.save();
  }

  async getPreference(userId: string): Promise<UserPreference> {
    return this.userPreferenceModel.findOne({ userId }).exec();
  }

  async updatePreference(userId: string, updates: Partial<UserPreference>): Promise<UserPreference> {
    return this.userPreferenceModel.findOneAndUpdate({ userId }, updates, { new: true }).exec();
  }

  async deletePreference(userId: string): Promise<UserPreference> {
    return this.userPreferenceModel.findOneAndDelete({ userId }).exec();
  }
}

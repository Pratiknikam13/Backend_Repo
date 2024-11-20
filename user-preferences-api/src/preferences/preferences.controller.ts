import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { UserPreference } from './user-preference.schema';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  createPreference(@Body() data: Partial<UserPreference>) {
    return this.preferencesService.createPreference(data);
  }

  @Get(':userId')
  getPreference(@Param('userId') userId: string) {
    return this.preferencesService.getPreference(userId);
  }

  @Patch(':userId')
  updatePreference(
    @Param('userId') userId: string,
    @Body() updates: Partial<UserPreference>,
  ) {
    return this.preferencesService.updatePreference(userId, updates);
  }

  @Delete(':userId')
  deletePreference(@Param('userId') userId: string) {
    return this.preferencesService.deletePreference(userId);
  }
}

import { Module } from '@nestjs/common';
import { ModelModule } from './modules/model.module';

@Module({
  imports: [ModelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

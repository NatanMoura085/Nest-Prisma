import { Module } from '@nestjs/common';
import { ModelService } from './Usuarios/model.service';
import { ModelController } from './Usuarios/model.controller';

@Module({
  controllers: [ModelController],
  providers: [ModelService],
})
export class ModelModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersService } from './users/users.service';
import { ItemModule } from './item/item.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('My API')
  .setDescription('Description of my API')
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, config);

@Module({
  imports: [CatsModule, ItemModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}

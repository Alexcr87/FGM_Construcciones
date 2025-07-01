import { Module } from '@nestjs/common';
import typeOrmConfig from './config/typeOrm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProductModule } from './module/product/product.module';
import { FilesModule } from './module/files/files.module';
import { CloudinaryConfig } from './config/cloudinary.config';
import { JwtModule } from '@nestjs/jwt';
import { CategoryModule } from './module/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const config = configService.get<TypeOrmModuleOptions>('typeorm');
        if (!config) {
          throw new Error('❌ No se encontró la configuración de TypeORM');
        }
        return config;
      },
    }),
    ProductModule,
    FilesModule,
    CategoryModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h' },
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryConfig],
})
export class AppModule {}

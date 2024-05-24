import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST_DESARROLLO,
      port: +process.env.PORT_DESARROLLO,
      database: process.env.DB_NAME_DESARROLLO,
      username: process.env.DB_USERNAME_DESARROLLO,
      password: process.env.DB_PASSWORD_DESARROLLO,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Sincroniza automáticamente los esquemas de la base de datos con las entidades
    }),
    UsuariosModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

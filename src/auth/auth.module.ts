import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';

@Module({
  //   imports: [PrismaModule],
  imports: [JwtModule.register({})], // to decode the json web token
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

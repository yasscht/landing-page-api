import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { UserService } from './user.service';
import { Response } from 'express';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post()
  async create(@Res() res: Response, @Body() user: User) {
    const response = res
      .status(HttpStatus.OK)
      .json(this.userService.create(user));
    return response;
  }
}

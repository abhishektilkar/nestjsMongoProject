import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto); 
        return this.usersService.createUser(createUserDto);
    }

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':userName')
    getUser(@Param('userName') userName: String) {
        console.log(userName);
        return this.usersService.getUser(userName);
    }

    @Patch(':id')
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: String) {
        return this.usersService.updateUser(id, updateUserDto);
    }

}
import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/User.schema";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(createUserDto: CreateUserDto) {
        try {
            const user = new this.userModel(createUserDto);
            return user.save();
        } catch (error) {
            console.log(error);
            throw error;
        }
        
    }

    async getUsers() {
        try{
            return this.userModel.find();
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUser(userName: String) {
        try {
            // console.log(userName);
            const user = await this.userModel.findOne({ 'username': userName });
            // console.log(user);
            if(!user) return "Can't get the user";
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    async updateUser(id: String, updateUserDto: UpdateUserDto) {
        try {
            const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto);
            if (!updatedUser)  throw new HttpException("Can't find the user with the given data value", 404);
            return updatedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteUser(id: String) {
        try {
            return this.userModel.findByIdAndDelete(id);
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}
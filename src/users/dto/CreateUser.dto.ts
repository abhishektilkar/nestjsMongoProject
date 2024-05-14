import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: String;

    @IsString()
    displayName?: String;
    
    avatar?: String;
}
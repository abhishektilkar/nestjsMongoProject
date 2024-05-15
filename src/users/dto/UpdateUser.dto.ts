import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {

    @IsString()
    username?: String;

    @IsString()
    displayName?: String;
    
    avatar?: String;
}
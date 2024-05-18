import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    username: String;

    @IsOptional()
    @IsString()
    displayName?: String;
    
    @IsOptional()
    avatar?: String;
}
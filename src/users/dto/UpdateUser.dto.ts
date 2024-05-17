import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {

    @IsOptional()
    @IsString()
    username?: String;

    @IsOptional()
    @IsString()
    displayName?: String;
    
    @IsOptional()
    avatar?: String;
}
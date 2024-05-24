import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(1)
  primerNombre: string;

  @IsString()
  @IsOptional()
  segundoNombre?: string;

  @IsString()
  @MinLength(1)
  primerApellido: string;

  @IsString()
  @IsOptional()
  segundoApellido?: string;

  @IsString()
  @MinLength(10)
  celular: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(1)
  numeroDocumento: string;

  @IsString()
  @MinLength(1)
  direccion: string;

  @IsString()
  @MinLength(1)
  ciudad: string;

  @IsNotEmpty()
  @IsDateString()
  fechaNacimiento: Date;

  @IsString()
  @MinLength(8)
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  foto?: string;

  @IsBoolean()
  @IsOptional()
  estado: boolean;

  @IsString()
  @IsOptional()
  afiliacionReligiosa?: string;

  @IsString()
  @IsOptional()
  fuenteRefirido?: string;
}

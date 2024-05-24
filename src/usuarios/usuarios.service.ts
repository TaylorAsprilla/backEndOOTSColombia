import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class UsuariosService {
  private readonly logger = new Logger('UsuariosService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = this.usuarioRepository.create(createUsuarioDto);

      await this.usuarioRepository.save(usuario);

      return usuario;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    return await this.usuarioRepository.find({
      take: limit,
      skip: offset,

      //TODO Relaciones
    });
  }

  async findOne(termino: string) {
    let usuario: Usuario;

    const isNumber = !isNaN(parseFloat(termino)) && isFinite(+termino);

    if (isNumber) {
      usuario = await this.usuarioRepository.findOneBy({ id: +termino });
    } else {
      usuario = await this.usuarioRepository.findOneBy({
        numeroDocumento: termino,
      });
    }

    if (!usuario) {
      throw new NotFoundException(`El usuario no se encontró`);
    }
    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  async remove(id: number) {
    const usuario = await this.findOne(id.toString());

    await this.usuarioRepository.remove(usuario);
    return `Se eliminó el usuario con el id: ${id}`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unxpected error, check server logs',
    );
  }
}

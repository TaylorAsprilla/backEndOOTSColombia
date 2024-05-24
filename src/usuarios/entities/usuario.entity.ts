import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false })
  primerNombre: string;

  @Column('varchar', { nullable: true })
  segundoNombre: string;

  @Column('varchar', { nullable: false })
  primerApellido: string;

  @Column('varchar', { nullable: true })
  segundoApellido: string;

  @Column('varchar', { nullable: false })
  celular: string;

  @Column('varchar', { nullable: false, unique: true })
  email: string;

  @Column('varchar', { nullable: false, unique: true })
  numeroDocumento: string;

  @Column('varchar', { nullable: false })
  direccion: string;

  @Column('varchar', { nullable: false })
  ciudad: string;

  @Column('date', { nullable: false })
  fechaNacimiento: Date;

  @Column('varchar', { nullable: true })
  password: string;

  @Column('varchar', { nullable: true })
  foto: string;

  @Column('boolean', { nullable: false, default: true })
  estado: boolean;

  @Column('varchar', { nullable: true })
  afiliacionReligiosa: string;

  @Column('varchar', { nullable: true })
  fuenteRefirido: string;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}

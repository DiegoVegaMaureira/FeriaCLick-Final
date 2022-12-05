import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { get } from 'http';

@Controller('usuario')
export class UsuarioController {}

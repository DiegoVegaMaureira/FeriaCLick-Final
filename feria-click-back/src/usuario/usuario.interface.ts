import { RowDataPacket } from "mysql2"

export interface IUser extends RowDataPacket {
    id?: number
    nombre: string
    correo: string
    contra: string
    admin: boolean
  }
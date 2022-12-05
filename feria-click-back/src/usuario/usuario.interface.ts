import { RowDataPacket } from "mysql2"

export interface IUser extends RowDataPacket {
    id?: number
    email: string
    password: string
    admin: boolean
    created_at: Date
  }
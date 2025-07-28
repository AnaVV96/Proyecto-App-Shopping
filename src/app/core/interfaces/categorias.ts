import { producto } from "./productos";

export interface categoria {
    id: number,
    nombre: string,
    fotoUrl: string,
    color: string,
    productos: producto[]
}
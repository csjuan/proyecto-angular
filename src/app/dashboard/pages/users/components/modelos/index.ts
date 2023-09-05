export interface user {
    id: number;
    name: string;
    apellido: string;
    direccion: string;
    email: string;
    password: string;
    rol: 'Administrador' | 'Usuario',
    token: string
}
export interface data {
    name: string;
    apellido: string;
    direccion: string;
    email: string;
    password: string;
    rol: string;

}
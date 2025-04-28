

export interface visitors {
    usuario: string;
    password: string;
    nombre: string;
    num_boleto: number;
}

const FAKE_VISITORS = [
    {
        usuario: "alejandra.m",
        password: "verde123",
        nombre: "Alejandra Morales",
        num_boleto: 123
    },
    {
        usuario: "david.p",
        password: "bosque456",
        nombre: "David Pérez",
        num_boleto: 124
    },
    {
        usuario: "lucia.r",
        password: "eco789",
        nombre: "Lucia Ramírez",
        num_boleto: 125
    }
]
export class Database{
    async db(): Promise<visitors[]>{
        return FAKE_VISITORS;
    }
}
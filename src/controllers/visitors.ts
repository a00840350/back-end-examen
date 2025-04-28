import { Database, visitors } from "../db/fake";

export class VisitorController{
    database = new Database();

    async verifyVisitor(Usuario: string, password: string): Promise<{ 
        success: boolean; 
        data?: { 
            nombre: string; 
            num_boleto: number 
        }; 
        message?: string 
    }> {
        const visitors = await this.database.db();
        const visitor = visitors.find(acc => 
            acc.usuario === Usuario && acc.password === password
        );

        if (visitor) {
            return {
                success: true,
                data: {
                    nombre: visitor.nombre,
                    num_boleto: visitor.num_boleto
                }
            };
        } else {
            return {
                success: false,
                message: "Acceso no permitido: Usuario o contraseña incorrectos"
            };
        }
    }
}
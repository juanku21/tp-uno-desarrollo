
import prisma from "config/client"

const borrarTodosAlumnos = async () : Promise<string> => {
    try {
        const res = await prisma.alumno.deleteMany()
        return `Borrado exitoso de ${res} registros`
    } 
    catch (error) {
        throw new Error(`${error}`)
    }
}

borrarTodosAlumnos().then(res => console.log(res))

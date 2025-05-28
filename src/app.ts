

import { UniversidadImporter } from "./import/universidadImport"
import { FacultadImporter } from "./import/facultadImport"
import { GradoImporter } from "./import/gradoimport"
import { LocalidadImporter } from "./import/localidadesImport"
import { PaisImporter } from "./import/paisImport"
import { EspecialidadImporter } from "./import/especialidadImport"
import { PlanImporter } from "./import/planImport"
import { MateriaImporter } from "./import/materiaImport"
import { OrientacionImporter } from "./import/orientacionimport"
import { alumnoGenerator } from "./import/alumnosImport"


const entities : string[] = [
    "./xml/universidad.xml",
    "./xml/facultades.xml", 
    "./xml/grados.xml", 
    "./xml/localidades.xml", 
    "./xml/paises.xml",
    "./xml/especialidades.xml",
    "./xml/planes.xml", 
    "./xml/materias.xml", 
    "./xml/orientaciones.xml",
]



const cargarDatos = async () => {
    let universityImporter = new UniversidadImporter(entities[0])
    await universityImporter.sendToDB()

    let facultyImporter = new FacultadImporter(entities[1])
    await facultyImporter.sendToDB()

    let gradeImporter = new GradoImporter(entities[2])
    await gradeImporter.sendToDB()

    let locationsImporter = new LocalidadImporter(entities[3])
    await locationsImporter.sendToDB()

    let countriesImporter = new PaisImporter(entities[4])
    await countriesImporter.sendToDB()

    let especialityImporter = new EspecialidadImporter(entities[5])
    await especialityImporter.sendToDB()

    let planImporter = new PlanImporter(entities[6])
    await planImporter.sendToDB()

    let subjectImporter = new MateriaImporter(entities[7])
    await subjectImporter.sendToDB()

    let orientationImporter = new OrientacionImporter(entities[8])
    await orientationImporter.sendToDB()
}

//cargarDatos()

alumnoGenerator(200000)

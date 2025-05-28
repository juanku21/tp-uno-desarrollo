

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



let universityImporter = new UniversidadImporter(entities[0])
universityImporter.sendToDB()

let facultyImporter = new FacultadImporter(entities[1])
facultyImporter.sendToDB()

let gradeImporter = new GradoImporter(entities[2])
gradeImporter.sendToDB()

let locationsImporter = new LocalidadImporter(entities[3])
locationsImporter.sendToDB()

let countriesImporter = new PaisImporter(entities[4])
countriesImporter.sendToDB()

let especialityImporter = new EspecialidadImporter(entities[5])
especialityImporter.sendToDB()

let planImporter = new PlanImporter(entities[6])
planImporter.sendToDB()

let subjectImporter = new MateriaImporter(entities[7])
subjectImporter.sendToDB()

let orientationImporter = new OrientacionImporter(entities[8])
orientationImporter.sendToDB()

alumnoGenerator(20000)



// const converter : XMLtoJSONConverter = new XMLtoJSONConverter(route[0])
// const result = await converter.convert()
// let parseResult

// if (route[0] === "./xml/localidades.xml") {
//     parseResult = JSON.parse(result).VFPData['_exportar']
// }
// else{
//     parseResult = JSON.parse(result).VFPData['_expxml']
// }


// for (let i = 0; i < parseResult.length; i++) {

//     const record = convertStringNumbersExcept(parseResult[i])

//     console.log(record)
    
//     await route[1].create(record)

// }



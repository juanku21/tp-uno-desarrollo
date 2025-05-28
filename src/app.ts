
import { XMLtoJSONConverter } from "./helpers/xml-json-converter"
import { convertStringNumbersExcept } from "./helpers/stringNumConvert"

import { UniversidadService } from "./services/universidad.service"
import { FacultadService } from "./services/facultad.service"
import { GradoService } from "./services/grado.service"
import { LocalidadService } from "./services/localidad.service"
import { PaisService } from "./services/pais.service"
import { EspecialidadService } from "./services/especialidad.service"
import { PlanService } from "./services/plan.service"
import { MateriaService } from "./services/materia.service"
import { OrientacionService } from "./services/orientacion.service"
import { AlumnoService } from "./services/alumno.service"

type tuplaData = [string, any]

const routes : tuplaData[] = [
    // ["./xml/universidad.xml", UniversidadService], 
    // ["./xml/facultades.xml", FacultadService], 
    // ["./xml/grados.xml", GradoService], 
    // ["./xml/localidades.xml", LocalidadService], 
    // ["./xml/paises.xml", PaisService], 
    // ["./xml/especialidades.xml", EspecialidadService], 
    // ["./xml/planes.xml", PlanService], 
    // ["./xml/materias.xml", MateriaService], 
    // ["./xml/orientaciones.xml", OrientacionService], 
]


routes.forEach( async route => {

    const converter : XMLtoJSONConverter = new XMLtoJSONConverter(route[0])
    const result = await converter.convert()
    let parseResult
    
    if (route[0] === "./xml/localidades.xml") {
        parseResult = JSON.parse(result).VFPData['_exportar']
    }
    else{
        parseResult = JSON.parse(result).VFPData['_expxml']
    }


    for (let i = 0; i < parseResult.length; i++) {

        const record = convertStringNumbersExcept(parseResult[i])

        console.log(record)
        
        await route[1].create(record)

    }


})



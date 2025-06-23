

import { UniversidadImporter } from "./import/universidadImport"
import { FacultadImporter } from "./import/facultadImport"
import { GradoImporter } from "./import/gradoimport"
import { LocalidadImporter } from "./import/localidadesImport"
import { PaisImporter } from "./import/paisImport"
import { EspecialidadImporter } from "./import/especialidadImport"
import { PlanImporter } from "./import/planImport"
import { MateriaImporter } from "./import/materiaImport"
import { OrientacionImporter } from "./import/orientacionimport"
import { alumnoGenerator } from "./import/alumnoGenerator"



const cargarDatos = async () => {
    
    let universityImporter = new UniversidadImporter("./xml/universidad.xml")
    await universityImporter.sendToDB()

    let facultyImporter = new FacultadImporter("./xml/facultades.xml")
    await facultyImporter.sendToDB()

    let gradeImporter = new GradoImporter("./xml/grados.xml")
    await gradeImporter.sendToDB()

    let locationsImporter = new LocalidadImporter("./xml/localidades.xml")
    await locationsImporter.sendToDB()

    let countriesImporter = new PaisImporter("./xml/paises.xml")
    await countriesImporter.sendToDB()

    let especialityImporter = new EspecialidadImporter("./xml/especialidades.xml")
    await especialityImporter.sendToDB()

    let planImporter = new PlanImporter("./xml/planes.xml")
    await planImporter.sendToDB()

    let subjectImporter = new MateriaImporter("./xml/materias.xml")
    await subjectImporter.sendToDB()

    let orientationImporter = new OrientacionImporter("./xml/orientaciones.xml")
    await orientationImporter.sendToDB()

    await alumnoGenerator(20000)
}

cargarDatos()




import { XMLtoJSONConverter } from "helpers/xml-json-converter"

const routes : string[] = [
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


routes.forEach( async route => {
    const converter : XMLtoJSONConverter = new XMLtoJSONConverter(route)
    const result = await converter.convert()
    console.log(result)
})
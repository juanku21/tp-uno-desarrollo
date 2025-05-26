
import { XMLtoJSONConverter } from "helpers/xml-json-converter"

const routes : string[] = [
    "./xml/facultades.xml",
    "./xml/especialidades.xml",
    "./xml/grados.xml",
    "./xml/localidades.xml",
    "./xml/materias.xml",
    "./xml/orientaciones.xml",
    "./xml/paises.xml",
    "./xml/planes.xml",
    "./xml/universidad.xml"
]


routes.forEach( async route => {
    const converter : XMLtoJSONConverter = new XMLtoJSONConverter(route)
    const result = await converter.convert()
    console.log(result)
})
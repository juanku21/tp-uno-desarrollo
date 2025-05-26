
import xml2js from "xml2js"
import fs from "fs"
import iconv from "iconv-lite" 


export class XMLtoJSONConverter {

    private readonly content : string

    constructor(route : string){

        // Leer y decodificar archivo XML con codificación WIN1252
        const buffer : Buffer = fs.readFileSync(route)
        this.content = iconv.decode(buffer, 'windows-1252')

    }

    public async convert() : Promise<any> {

        // Convertir XML a JSON

        return new Promise((resolve, reject) => {
            xml2js.parseString(this.content, { explicitArray: false }, (err : any, result : any) => {

                if (err) {
                    console.error('Error al parsear XML:', err)
                    reject(err)
                }

                // Aquí tienes el XML como objeto JSON
                resolve(JSON.stringify(result, null, 2)) 
            })
        })

        
    }

}
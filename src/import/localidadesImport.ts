

import { BaseImporter } from "./baseImport"
import { LocalidadService } from "../services/localidad.service"
import { XMLtoJSONConverter } from "../helpers/xml-json-converter"
import { convertStringNumbersExcept } from "../helpers/stringNumConvert"

export class LocalidadImporter extends BaseImporter<typeof LocalidadService> {

    protected readonly route : string

    constructor(route : string){
        super(route, LocalidadService)
    }

    public async sendToDB() {
            
        const converter : XMLtoJSONConverter = new XMLtoJSONConverter(this.route)
        const result = await converter.convert()
        const parseResult = JSON.parse(result).VFPData['_exportar']

        for (let i = 0; i < parseResult.length; i++) {
        
            const record = convertStringNumbersExcept(parseResult[i])
        
            console.log(record)
            
            await (this.service as any).create(record)
        
        }
    }

}
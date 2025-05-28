
import { XMLtoJSONConverter } from "../helpers/xml-json-converter"
import { convertStringNumbersExcept } from "../helpers/stringNumConvert"

export abstract class BaseImporter <T> {

    protected readonly route : string
    protected readonly service : T

    constructor(route : string, service : T) {
        this.route = route
        this.service = service
    }

    public async sendToDB() {

        const converter : XMLtoJSONConverter = new XMLtoJSONConverter(this.route)
        const result = await converter.convert()
        const parseResult = JSON.parse(result).VFPData['_expxml']

        for (let i = 0; i < parseResult.length; i++) {
        
            const record = convertStringNumbersExcept(parseResult[i])
        
            console.log(record)
            
            await (this.service as any).create(record)
        
        }
    }

}

    

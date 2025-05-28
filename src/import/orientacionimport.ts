
import { BaseImporter } from "./baseImport"
import { OrientacionService } from "../services/orientacion.service"

export class OrientacionImporter extends BaseImporter<typeof OrientacionService> {

    protected readonly route : string

    constructor(route : string){
        super(route, OrientacionService)
    }

}
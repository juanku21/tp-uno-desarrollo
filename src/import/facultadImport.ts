
import { BaseImporter } from "./baseImport"
import { FacultadService } from "../services/facultad.service"

export class FacultadImporter extends BaseImporter<typeof FacultadService> {

    protected readonly route : string

    constructor(route : string){
        super(route, FacultadService)
    }

}

import { BaseImporter } from "./baseImport"
import { PaisService } from "../services/pais.service"

export class PaisImporter extends BaseImporter<typeof PaisService> {

    protected readonly route : string

    constructor(route : string){
        super(route, PaisService)
    }

}
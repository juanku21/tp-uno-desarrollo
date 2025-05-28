import { BaseImporter } from "./baseImport"
import { UniversidadService } from "../services/universidad.service"

export class UniversidadImporter extends BaseImporter<typeof UniversidadService> {

    protected readonly route : string

    constructor(route : string){
        super(route, UniversidadService)
    }

}
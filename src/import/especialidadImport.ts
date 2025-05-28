import { BaseImporter } from "./baseImport"
import { EspecialidadService } from "../services/especialidad.service"

export class EspecialidadImporter extends BaseImporter<typeof EspecialidadService> {

    protected readonly route : string

    constructor(route : string){
        super(route, EspecialidadService)
    }

}

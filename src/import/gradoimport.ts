
import { BaseImporter } from "./baseImport"
import { GradoService } from "../services/grado.service"

export class GradoImporter extends BaseImporter<typeof GradoService> {

    protected readonly route : string

    constructor(route : string){
        super(route, GradoService)
    }

}
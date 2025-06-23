import { BaseImporter } from "./baseImport"
import { MateriaService } from "../services/materia.service"

export class MateriaImporter extends BaseImporter<typeof MateriaService> {

    protected readonly route : string

    constructor(route : string){
        super(route, MateriaService)
    }

}
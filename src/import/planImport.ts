import { BaseImporter } from "./baseImport"
import { PlanService } from "../services/plan.service"

export class PlanImporter extends BaseImporter<typeof PlanService> {

    protected readonly route : string

    constructor(route : string){
        super(route, PlanService)
    }

}
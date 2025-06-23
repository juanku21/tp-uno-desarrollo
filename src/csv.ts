
import { AlumnoService } from './services/alumno.service'
import { performance } from 'perf_hooks'
import { parseCSVToAlumnos } from './helpers/csv-parser'


parseCSVToAlumnos("./csv/alumnos.csv").then(async res => {
    console.log(res.length)

    const inicio = performance.now()

    // res.forEach(async alumno => {
    //     console.log(alumno)
        
    //     try{
    //         await AlumnoService.create(alumno)
    //     }
    //     catch(error : any){
    //         console.log(error)
    //     }

    // })

    for (let i = 0; i < 1000; i++) {

        await Promise.all([
            AlumnoService.create(res[0 + i * 25]),
            AlumnoService.create(res[1 + i * 25]),
            AlumnoService.create(res[2 + i * 25]),
            AlumnoService.create(res[3 + i * 25]),
            AlumnoService.create(res[4 + i * 25]),
            AlumnoService.create(res[5 + i * 25]),
            AlumnoService.create(res[6 + i * 25]),
            AlumnoService.create(res[7 + i * 25]),
            AlumnoService.create(res[8 + i * 25]),
            AlumnoService.create(res[9 + i * 25]),
            AlumnoService.create(res[10 + i * 25]),
            AlumnoService.create(res[11 + i * 25]),
            AlumnoService.create(res[12 + i * 25]),
            AlumnoService.create(res[13 + i * 25]),
            AlumnoService.create(res[14 + i * 25]),
            AlumnoService.create(res[15 + i * 25]),
            AlumnoService.create(res[16 + i * 25]),
            AlumnoService.create(res[17 + i * 25]),
            AlumnoService.create(res[18 + i * 25]),
            AlumnoService.create(res[19 + i * 25]),
            AlumnoService.create(res[20 + i * 25]),
            AlumnoService.create(res[21 + i * 25]),
            AlumnoService.create(res[22 + i * 25]),
            AlumnoService.create(res[23 + i * 25]),
            AlumnoService.create(res[24 + i * 25]),

            // prueba de 50 conexiones
            // AlumnoService.create(res[25 + i * 50]),
            // AlumnoService.create(res[26 + i * 50]),
            // AlumnoService.create(res[27 + i * 50]),
            // AlumnoService.create(res[28 + i * 50]),
            // AlumnoService.create(res[29 + i * 50]),
            // AlumnoService.create(res[30 + i * 50]),
            // AlumnoService.create(res[31 + i * 50]),
            // AlumnoService.create(res[32 + i * 50]),
            // AlumnoService.create(res[33 + i * 50]),
            // AlumnoService.create(res[34 + i * 50]),
            // AlumnoService.create(res[35 + i * 50]),
            // AlumnoService.create(res[36 + i * 50]),
            // AlumnoService.create(res[37 + i * 50]),
            // AlumnoService.create(res[38 + i * 50]),
            // AlumnoService.create(res[39 + i * 50]),
            // AlumnoService.create(res[40 + i * 50]),
            // AlumnoService.create(res[41 + i * 50]),
            // AlumnoService.create(res[42 + i * 50]),
            // AlumnoService.create(res[43 + i * 50]),
            // AlumnoService.create(res[44 + i * 50]),
            // AlumnoService.create(res[45 + i * 50]),
            // AlumnoService.create(res[46 + i * 50]),
            // AlumnoService.create(res[47 + i * 50]),
            // AlumnoService.create(res[48 + i * 50]),
            // AlumnoService.create(res[49 + i * 50]),
        ])
    }

    const fin = performance.now()

    console.log(fin - inicio)
    
})

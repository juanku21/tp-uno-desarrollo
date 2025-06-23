
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import { alumnoGenerator } from "./alumnoGenerator"
import { Prisma } from '@prisma/client'

const data : any[] = alumnoGenerator(2500000)

export async function generateCSVFromArray(users: Prisma.AlumnoCreateInput[], outputPath: string): Promise<void> {
  
    return new Promise((resolve, reject) => {

    const outputFilePath = path.isAbsolute(outputPath)
      ? outputPath
      : path.resolve(__dirname, outputPath)

    const dir = path.dirname(outputFilePath)

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const stream = fs.createWriteStream(outputFilePath, { encoding: 'utf8' })

    const headers = [
      'apellido',
      'nombre',
      'numero_documento',
      'tipo_documento',
      'fecha_nacimiento',
      'sexo',
      'numero_legajo',
      'fecha_ingreso'
    ]

    stream.write(headers.join(',') + '\n')

    let i = 0;

    function write() {
      let ok = true;
      while (i < users.length && ok) {
        const u = users[i++];
        const row = [
          u.apellido,
          u.nombre,
          u.numero_documento.toString(),
          u.tipo_documento,
          u.fecha_nacimiento.toString().split('T')[0],
          u.sexo,
          u.numero_legajo.toString(),
          u.fecha_ingreso.toString().split('T')[0]
        ].map(field => {
          if (field.includes(',') || field.includes('"')) {
            return `"${field.replace(/"/g, '""')}"`;
          }
          return field;
        });

        ok = stream.write(row.join(',') + '\n')
      }

      if (i < users.length) {
        stream.once('drain', write)
      } else {
        stream.end()
      }
    }

    stream.on('finish', () => resolve())
    stream.on('error', (err) => reject(err))

    write()

  })
}


generateCSVFromArray(data, '../../csv/alumnos.csv')
.then(() => console.log('CSV generado correctamente'))
.catch((err) => console.error('Error al generar CSV:', err))
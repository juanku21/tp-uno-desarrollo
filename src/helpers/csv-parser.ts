
import * as fs from 'fs'
import { parse } from "fast-csv"

function parseFecha(fechaStr: string): Date {
  const normalizado = fechaStr.replace(/\bGM\b/, 'GMT')
  const fecha = new Date(normalizado);
  return isNaN(fecha.getTime()) ? new Date(0) : fecha
}


export async function parseCSVToAlumnos(filePath: string): Promise<any[]> {
 return new Promise((resolve, reject) => {
    const alumnos: any[] = []

    fs.createReadStream(filePath)
      .pipe(parse({ headers: true }))
      .on('error', reject)
      .on('data', (row) => {

        if (Object.values(row).every(val => val === '' || val === undefined)) return

        try {
          alumnos.push({
            apellido: row.apellido,
            nombre: row.nombre,
            numero_documento: parseInt(row.numero_documento, 10),
            tipo_documento: row.tipo_documento,
            fecha_nacimiento: new Date(parseFecha(row.fecha_nacimiento)),
            sexo: row.sexo,
            numero_legajo: parseInt(row.numero_legajo, 10),
            fecha_ingreso: new Date(parseFecha(row.fecha_ingreso)),
          } as any);
        } catch (err) {
          console.error('Error al parsear fila:', row, err)
        }
      })
      .on('end', () => resolve(alumnos))
  });
}
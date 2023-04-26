import * as fs from 'fs';
import csv = require('csv-parser');

export const backfill = (
    filePath: string
): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const response: any[] = []
        fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', async(data: any) => {
            response.push(data)
        })
        .on('end', () => {
            console.log('CSV file successfully migrated');
            resolve(response)
        })
        .on('error', (error: any) => {
            reject(error)
        })
    })
 }


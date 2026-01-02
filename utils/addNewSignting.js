import { getData } from './getData.js'
import fs from 'node:fs/promises'
import path from 'node:path'

export async function addNewSighting(sighting) {
    const data = await getData()
    data.push(sighting)
    try {
        const pathJSON = path.join('data', 'data.json')
        await fs.writeFile(pathJSON, JSON.stringify(data, null, 2))
    } catch (err) {
        throw new Error(`Failed to add new sighting: ${err.message}`)
    }
}

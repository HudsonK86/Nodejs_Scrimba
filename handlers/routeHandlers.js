import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
//import { sanitizeData } from '../utils/sanitizeData.js'
import { addNewSighting } from '../utils/addNewSighting.js'

export async function handleGet(res) {
  const data = await getData()
  const content = JSON.stringify(data)
  sendResponse(res, 200, 'application/json', content)
}  

// handlePost

// parseJSONBody() w
// santizeData() will collect and parse the incoming JSON
// addNewSighting() will do the donkey work of adding the data to our dataset
// sendResponse()

export async function handlePost(req, res) {
  console.log('POST request received')
}
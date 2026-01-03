import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { sanitizeInput } from '../utils/sanitizeInput.js'
import { addNewSighting } from '../utils/addNewSignting.js'
import { sightingEvents } from '../events/sightingEvents.js'
import { stories } from '../data/stories.js'

export async function handleGet(res) {
  const data = await getData()
  const content = JSON.stringify(data)
  sendResponse(res, 200, 'application/json', content)
}  


export async function handlePost(req, res) {
  
  try {
    const parsedBody = await parseJSONBody(req)
    const sanitizedInput = await sanitizeInput(parsedBody)
    await addNewSighting(sanitizedInput)
    sightingEvents.emit('sightingAdded', sanitizedInput)
    sendResponse(res, 201, 'application/json', JSON.stringify({ success: true, status: 201 }))
  } catch (err) {
    sendResponse(res, 400, 'application/json', JSON.stringify({ error: err.message, status: 400 }))
  }
}

export async function handleGetNews(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * stories.length)
    const story = stories[randomIndex]
    res.write(
      `data: ${JSON.stringify({ 
        event: 'news-update',
        story: stories[randomIndex]
       })}\n\n`)
  }, 2000)
}
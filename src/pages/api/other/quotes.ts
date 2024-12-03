import { Hono } from 'hono'
import axios from 'axios'

const quotes = new Hono()

quotes.get('/', async (c) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/quotes/')
    const data = response.data
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomQuote = data[randomIndex]
    return c.json(randomQuote)
  } catch (error) {
    return c.json({ error: 'Failed to fetch quote' + error }, 500)
  }
})

export default quotes
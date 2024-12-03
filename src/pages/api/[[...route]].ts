import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import type { PageConfig } from 'next'
import routes from './routes'

export const config: PageConfig = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.route('/', routes)

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

export default handle(app)
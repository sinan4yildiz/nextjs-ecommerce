import { IncomingMessage, ServerResponse } from 'http'

require('dotenv').config({
   path: '.env.local',
})

const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.APP_HOST
const port = process.env.APP_PORT
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
   createServer(async (req: IncomingMessage, res: ServerResponse) => {
      try {
         await handle(req, res)
      }
      catch (err) {
         console.error(`🦠 The server couldn't be created.`, req.url, err)

         res.statusCode = 500
         res.end('Internal server error')
      }
   }).listen(port, (err: Error) => {
      if (err) {
         throw err
      }

      console.log(`📟 Application is ready on ${process.env.APP_URL}`)
   })
})

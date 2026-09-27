import { defineConfig } from 'vite'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import reviewsApi from './api/reviews.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const localEnv = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'local-reviews-api',
        configureServer(server) {
          server.middlewares.use('/api/reviews', (req, res, next) => {
            res.status = (status) => {
              res.statusCode = status
              return res
            }
            res.json = (body) => {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(body))
            }
            reviewsApi(req, res, localEnv).catch(next)
          })
        },
      },
    ],
  }
})


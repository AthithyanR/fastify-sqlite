import Fastify from 'fastify'
import { nanoid } from 'nanoid'

import db from './db.js'
import { safeJsonParse, safeJsonStringify } from './utils.js'

const fastify = Fastify({ logger: true })

fastify.get('/store', async () => {
  const result = await db.all('select * from store')
  result.forEach((res) => res.data = safeJsonParse(res.data))
  return { success: true, data: result }
})

fastify.post('/store', async (req) => {
  await db.run('insert into store values (?, ?)', [nanoid(), safeJsonStringify(req.body)])
  return { success: true }
})

const start = async () => {
  try {
    await fastify.listen({ port: 8080 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
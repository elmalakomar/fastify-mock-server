'use strict'

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('@fastify/formbody'))

fastify.all('*', async (request, reply) => {
    request.log.info({request})
    reply.send({ hello: 'world' })
  })

const main = async ()  => {
    try {
        await fastify.listen({ port: 3000 })
      } catch (err) {
        fastify.log.error(err)
        process.exit(1)
      }
}

main()
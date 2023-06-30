const fastify = require('fastify')()

fastify
  .register(require('@fastify/nextjs'))
  .after(() => {
    fastify.next('/')
    fastify.next('/quill')
    fastify.next('/api/test')
  })

fastify.listen({port:3000}, err => {
  if (err) throw err
  console.log('Server listening on http://localhost:3000')
})
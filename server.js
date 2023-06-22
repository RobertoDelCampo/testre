import fastifyPlugin from 'fastify-plugin';
import { IncomingMessage, ServerResponse } from 'http';
import Next from 'next';
import { NextServer } from 'next/dist/server/next';
import fastifyStatic from 'fastify-static';

const fastifyNextJs: FastifyPluginAsync<FastifyNextJsOptions> = async (fastify, { dev, basePath = '' }) => {
  if (dev === undefined) {
    dev = process.env.NODE_ENV !== 'production';
  }

  const nextServer = Next({
    dev,
  });

  const nextRequestHandler = nextServer.getRequestHandler();

  // ... Resto del código ...

  await nextServer.prepare();
};

const proxyFastifyRawReply = (reply: FastifyReply) => {
    return new Proxy(reply.raw, {
      // ... Resto del código ...
    });
  };

  

  const dev = process.env.NODE_ENV !== 'production';

fastify.register(fastifyNextJs, {
    dev,
});

await fastify.after();

fastify.passNextJsDataRequests();

if (dev) {
    fastify.passNextJsDevRequests();
} else {
    fastify.passNextJsStaticRequests();
}

fastify.passNextJsPageRequests();


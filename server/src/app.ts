import { FastifyInstance } from "fastify";
import knexPlugin from "./plugins/knex";
import redisPlugin from "./plugins/redis";
import routes from "./routes";
import cors from '@fastify/cors'

const env = process.env.ENVIRONMENT ?? "development";

async function app(fastify: FastifyInstance) {
  fastify.register(knexPlugin);
  fastify.register(redisPlugin);
  fastify.register(routes);
  fastify.register(cors);

  console.log(`✅ fastify instance configured (env: ${env})\n`);
}

export default app;

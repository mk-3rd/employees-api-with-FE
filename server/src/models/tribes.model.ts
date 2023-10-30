import { FastifyInstance } from "fastify";
import { ResourceNotFoundError } from "../errors/resource-not-found";

export interface Tribe {
  id: number;
  name: string;
  department: string;
}

const TABLE_NAME = "tribes";

export async function getTribes(fastify: FastifyInstance): Promise<Tribe[]> {
  const tribes = await fastify.db.from(TABLE_NAME).select();
  return tribes;
}

export async function getTribe(fastify: FastifyInstance, id: number) {
  const tribe = await fastify.db
    .from(TABLE_NAME)
    .where({ id })
    .select()
    .first();

  if (!tribe) {
    const message = `No tribe with id ${id} is found`;
    throw new ResourceNotFoundError(message);
  }

  return tribe;
}

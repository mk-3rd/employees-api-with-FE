import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify()

fastify.register(cors, {
  origin: (origin, callback) => {
    if (origin && origin.includes("localhost")) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed"), false)
    }
  }
})
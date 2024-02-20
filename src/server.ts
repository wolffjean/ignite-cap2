import fastify from 'fastify'
import { knex } from './database'
import crypt from 'node:crypto'
const app = fastify()

app.get('/hello', async () => {
    const transaction = await knex('transactions')
        .insert({
            id: crypto.randomUUID(),
            title: 'Transação de teste',
            amout: 1000,
        })
        .returning('*')

    return transaction
})

app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('HTTP Server Running!')
    })

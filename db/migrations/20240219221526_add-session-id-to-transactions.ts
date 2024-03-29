import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table) => {
        table.uuid('session_id').after('id').index()
        table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
        table.decimal('amount', 10,2).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table) => {
        table.dropColumn('session_id')
        table.dropColumn('created_at')
        table.dropColumn('amount')
    })
}

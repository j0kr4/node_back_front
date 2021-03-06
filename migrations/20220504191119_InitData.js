export const up = async (knex) => {
    await knex.schema.createTable("users", (table) => {
      table.increments("id")
      table.text("email").notNullable().unique()
      table.text("displayName")
      table.text("passwordHash").notNullable()
      table.text("passwordSalt").notNullable()
    })
  
    await knex.schema.createTable("posts", (table) => {
      table.increments("id")
      table.text("title").notNullable()
      table.text("content").notNullable()
      table.integer("userId").unsigned().notNullable()
      table.foreign("userId").references("id").inTable("users")
      table.datetime("createdAt").notNullable().defaultTo(knex.fn.now())
    })
  
    await knex.schema.createTable("comments", (table) => {
      table.increments("id")
      table.text("content").notNullable()
      table.integer("userId").unsigned().notNullable()
      table.integer("postId").unsigned().notNullable()
      table.foreign("userId").references("id").inTable("users")
      table.foreign("postId").references("id").inTable("posts")
      table.datetime("createdAt").notNullable().defaultTo(knex.fn.now())
    })
  }
  
  export const down = async (knex) => {
    await knex.schema.dropTable("comments")
    await knex.schema.dropTable("posts")
    await knex.schema.dropTable("users")
  }
  
exports.up = function(knex) {
    return knex.schema.createTable('posts', post => {
        post.increments();

        post
            .string('name', 100)
            .notNullable();
        
        post 
            .string('comment', 500)
            .notNullable();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
};

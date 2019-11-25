
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          name: 'Ryan',
          comment: 'Hello',
        },
        {
            name: 'Jason',
            comment: 'World',
        },
        {
            name: 'Conary',
            comment: 'Uhhhhhh',
        },
      ]);
    });
};

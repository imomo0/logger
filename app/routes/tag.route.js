module.exports = (app) => {
    const games = require('../controllers/tag.controller.js');

    // Creat a new tags
    app.post('/tags', tag.create);

    /// GET COMMANDS ----------------------
    // Retrive all tags
    app.get('/tags', tag.findAll);

    // Retrive game by ID
    app.get('/tags/:id', tag.findOneById)

    /// PUT COMMANDS ----------------------
    // Update one game by ID
    app.put('/tags/:id', tag.update);

    /// DELETE COMMANDS -------------------
    // Delete a game
    app.delete('/tags/:id', tag.delete);
}
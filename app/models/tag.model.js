let mongoose = require('mongoose');
const Scema = mongoose.Schema;
const tag = new Scema({
    komponent: {type: String},
    name: {type: String},
    prefix: {type: String},
    suffix: {type: String}
});

module.exports = mongoose.model('Tag', tag);
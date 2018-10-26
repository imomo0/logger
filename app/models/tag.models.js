let mongoose = require('mongoose');
const Scema = mongoose.Schema;
const tag = new Scema({
    name: {type: String},
    komponent: {type: String},
    prefix: {type: String},
    suffix: {type: String}
});

module.exports = mongoose.model('Tag', tag);
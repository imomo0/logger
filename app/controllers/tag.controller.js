const Tag = require('../models/tag.model.js');

exports.create = (req,res) => {
    console.log(req.body);
    const tag = new Tag(req.body);
    tag.save()
    .then(data => {
        return res.send(data);
    })
    .catch(err => {
        res.status(400).send("Error: " + err.message);
    })
};

exports.findAll = (req, res) => {
    Tag.find((err, tags)=>{
        if(err) return res.status(100).send({message: "No games :("});
        res.status(200).send(tags);
    });
};

exports.findOneById = (req,res) => {
    Tag.findById(req.params.id)
    .then(tag => {
        if(!tag) return res.status(404).send({message: "Found no game with id: " + req.params.id});
        res.send(tag);
    })
    .catch(err => {
        res.status(400).send({message: "Error: " + err.message});
    })
};

exports.update = (req,res) => {
    Tag.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true}, (err, data) => {
        if(err) return res.status(404).send({message: "Error: " + err.message});
        res.status(200).send({status: "Updated", object: data});
    })
};

exports.delete = (req,res) => {
    Tag.findOneAndDelete({_id: req.params.id}, (err, data) => {
        if(err) return res.status(404).send({message: "Could not find record"});
        res.status(200).send({status: "Deleted", object: data});
    });
};

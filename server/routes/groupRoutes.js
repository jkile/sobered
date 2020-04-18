const express = require("express");
const Group = require("../models/groups");
const router = new express.Router();

router.post("/api/groups", async (req, res) => {
    const group = new Group(
        {
            name: req.body.name,
            time: req.body.time,
            location: req.body.location,
            description: req.body.description,
            days: req.body.days,
            tags: req.body.tags,
            owner: req.body.owner,
            members: req.body.owner
        }
    )
    try{
        await group.save();
        res.send(200);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/api/groups/search/:search", async (req, res) => {
    let searchParam = new RegExp(req.params.search, "i");
    Group.find({$or: [{tags: searchParam}, {location: searchParam}, {days: searchParam}, {name: searchParam}, {description: searchParam}]})
        .then(data => res.send(data))
        .catch(e => res.send(e))
})

router.get("/api/groups/:id", async (req, res) => {
    Group.find({members: req.params.id})
        .then(data => res.send(data))
        .catch(e => res.send(e));
})

router.put("/api/groups/:groupId/:userId", async (req, res) => {
    Group.findOneAndUpdate({_id: req.params.groupId}, {$push: {members: req.params.userId}})
        .then(data => res.send(data))
        .catch(e => console.log(e));
})

module.exports = router;
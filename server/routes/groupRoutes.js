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
            tags: req.body.tags

        }
    )

    try{
        await group.save();
        res.send(200);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/api/groups/:search", async (req, res) => {
    let searchParam = new RegExp(req.params.search, "i");
    Group.find({$or: [{tags: searchParam}, {location: searchParam}, {days: searchParam}, {name: searchParam}, {description: searchParam}]})
        .then(data => res.send(data))
        .catch(e => res.send(e))
})

module.exports = router;
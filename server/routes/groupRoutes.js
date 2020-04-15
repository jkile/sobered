const express = require("express");
const Group = require("../models/groups");
const router = new express.Router();

router.post("/api/groups/new", async (req, res) => {
    const group = new Group(
        {
            members: req.body.members,
            owner: req.body.owner,
            time: req.body.time,
            location: req.body.location,
            name: req.body.name,
            thumbnail: req.body.thumbnail
        }
    )

    try{
        await group.save();
        res.send(200);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/api/groups", async (req, res) => {

})

module.exports = router;
const { Router } = require("express");
const { authenticate } = require("../middlewares");
const routes = Router();
const { Notes } = require("../models");

//get all Notess
routes.get("/", authenticate, async (req, res) => {
  const data = await Notes.find({})

  if (data) {
    console.log(data);
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "try again" });
  }
});

routes.get("/:id", authenticate, async (req, res) => {
  const {id} = req.params
  const data = await Notes.find({_id:id})

  if (data) {
    console.log(data);
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "try again" });
  }
});

//add a Notes
routes.post("/", authenticate, async (req, res) => {
  const { title, tags, desc } = req.body;

  const data = new Notes({
    title,
    tags,
    desc
  });

  const result = await data.save();

  if (result) {
    // console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).json({ message: "Some error try again" });
  }
});

//update notes
routes.put("/", authenticate, async (req, res) => {
  const { title, tags, desc,id } = req.body;

  const data = await Notes.updateOne(
    {_id:id},
    {
      $set: {title,tags,desc}
    }
  )

  if (data) {
    // console.log(result);
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "Some error try again" });
  }
});

//delete Notess
routes.delete("/", authenticate, async (req, res) => {
  const {id} = req.body
  const response = await Notes.findByIdAndDelete({_id:id});
  if (response) {
    res.status(200).json(response);
  } else {
    res
      .status(500)
      .json({ message: "Failed to delete files please try again" });
  }
});

module.exports = routes;

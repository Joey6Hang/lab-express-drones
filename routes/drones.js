const express = require('express');
const dronesModel = require('./../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', async function (req, res, next) {
  // Iteration #2: List the drones
  try {
    res.render("drones/list.hbs", {
      drones: await dronesModel.find()
    })
  } catch (err) {
    next(err)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render("drones/create-form.hbs")
  }catch (err) {
    next(err)
  }
});

router.post('/drones/create', async function (req, res, next) {
  // Iteration #3: Add a new drone
  try {
    await dronesModel.create({
      name: req.body.name,
      propellers:req.body.propellers,
      maxSpeed:req.body.maxSpeed,
    })
    res.redirect('/drones');
  }catch (err) {
    next(err);
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  dronesModel.findById(req.params.id)
  .then((drones) => res.render("drones/update.hbs" , { drones }))
  .catch(next);
});

router.post('/drones/:id/edit', async function (req, res, next) {
  // Iteration #4: Update the drone
  try {
    await dronesModel.findByIdAndUpdate(req.params.id , {
      name: req.body.name,
      propellers:req.body.propellers,
      maxSpeed:req.body.maxSpeed,
    })
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  dronesModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/drones"))
    .catch(next);
});

module.exports = router;

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/galaxyDB", { useNewUrlParser: true })
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const solarSystemSchema = new Schema({
  starName: String,
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});
const planetSchema = new Schema({
  system: { type: Schema.Types.ObjectId, ref: "SolarSystem" },
  name: String,
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});
const visitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema);
const Planet = mongoose.model("Planet", planetSchema);
const Visitor = mongoose.model("Visitor", visitorSchema);

const s1 = new SolarSystem({
  starName: "SUN",
  planets: [],
});
const p1 = new Planet({
  system: s1,
  name: "EARTH",
  visitors: [],
});
const v1 = new Visitor({
  name: "ALAN",
  homePlanet: p1,
  visitedPlanets: [],
});

// s1.planets.push(p1);
// p1.visitors.push(v1);
// v1.visitedPlanets.push(p1);

// s1.save();
// p1.save();
// v1.save();

//q1
Visitor.findOne({})
  .populate("visitedPlanets")
  .exec()
  .then(function (visitor) {
    console.log(visitor.visitedPlanets);
  });

//q2
Planet.findOne({})
  .populate("visitors")
  .exec()
  .then(function (planet) {
    console.log(planet.visitors);
  });

//q3
SolarSystem.findOne({})
  .populate({
    path: "planets",
    populate: {
      path: "visitors",
    },
  })
  .exec()
  .then(function (s) {
    console.log(JSON.stringify(s, null, 3));
  });

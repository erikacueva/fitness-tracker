const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        required: "Workout name is required.",
        type: String,
      },
    },
    {
      type: {
        required: "Workout type is required.",
        type: String,
      },
    },
    {
      duration: {
        type: Number,
        required: "Workout duration is required.",
      },
    },
    {
      weight: {
        type: Number,
      },
    },
    {
      sets: {
        type: Number,
      },
    },
    {
      distance: {
        type: Number,
      },
    },
  ],
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
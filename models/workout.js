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
        trim: true,
      },
    },
    {
      type: {
        required: "Workout type is required.",
        type: String,
        trim: true,
      },
    },
    {
      duration: {
        type: Number,
        trim: true,
        required: "Workout duration is required.",
      },
    },
    {
      weight: {
        type: Number,
        trim: true,
      },
    },
    {
      sets: {
        type: Number,
        trim: true,
      },
    },
    {
      distance: {
        type: Number,
        trim: true,
      },
    },
  ],
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
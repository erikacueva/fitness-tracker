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
        require: true,
        type: String,
        trim: true,
      },
    },
    {
      type: {
        type: String,
        trim: true,
      },
    },
    {
      duration: {
        type: String,
        trim: true,
      },
    },
    {
      weight: {
        type: Integer,
        trim: true,
      },
    },
    {
      sets: {
        type: Integer,
        trim: true,
      },
    },
    {
      distance: {
        type: Integer,
        trim: true,
      },
    },
  ],
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
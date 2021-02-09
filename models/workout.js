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
        type: String,
        trim: true,
        // require name, type, duration
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
        type: String,
        trim: true,
      },
    },
    {
      sets: {
        type: String,
        trim: true,
      },
    //   add distance
    },
  ],
});


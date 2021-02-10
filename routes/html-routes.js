var path = require("path");
const router = require("express").Router();

// HTML GET Requests

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// if not matching route is found default to index

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;

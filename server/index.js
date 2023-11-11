const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "/uploads");
  },
  // Sets file(s) to be saved in uploads folder in same directory
  filename: function (req, file, callback) {
    const originalname = file.originalname;
    const timestamp = Date.now();
    const filename = `${timestamp}_${originalname}`;
    callback(null, filename);
  },
  // Sets saved filename(s) to be original filename(s)
});
const upload = multer({ storage: storage });

app.post("/upload", upload.array("files"), (req, res) => {
  res.json({
    message: "success",
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

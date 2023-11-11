const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");

app.use(cors());

const storage = multer.diskStorage({
  destination: function (_, _, callback) {
    callback(null, __dirname + "/uploads");
  },
  filename: function (_, file, callback) {
    const originalname = file.originalname;
    const timestamp = Date.now();
    const filename = `${timestamp}_${originalname}`;
    callback(null, filename);
  },
});
const upload = multer({ storage: storage });

app.post("/upload", upload.array("files"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

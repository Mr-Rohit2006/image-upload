const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "image.html"));
});

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
  cb(null, "uploads/")
 },
 filename: function (req, file, cb) {
  cb(null, Date.now() + "-" + file.originalname)
 }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
 res.send("Image Uploaded Successfully");
});

app.listen(3000, "0.0.0.0", () => {
 console.log("Server running on port 3000");
});
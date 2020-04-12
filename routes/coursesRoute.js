var multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./files",
  filename(req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname
    );
  }
});

const upload = multer({ storage });

module.exports = app => {
  app.post("/files", upload.single("file"), (req, res) => {
    const file = req.file; // file passed from client
    const meta = req.body; // all other values passed from the client, like name, etc..

    console.log("file uploaded", file);
    res.send("file-uploaded");
  });
};

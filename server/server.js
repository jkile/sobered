const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const groupRoutes = require("./routes/groupRoutes");
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "../client/build");
mongoose.connect(process.env.MONGODB_URI ||"mongodb://danebow:kichu3263@ds261077.mlab.com:61077/heroku_v213k4dq")
const db = mongoose.connection;
const PORT = process.env.PORT || 8000;
const server = require("http").Server(app);
const io = require("socket.io")(server);
const bodyParser = require('body-parser')
const withAuth = require('./middleware/middleware')
const secret = require('./middleware/secret')
const cookieParser = require('cookie-parser')


app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json())
app.use(express.static(publicDirectoryPath));
app.use(userRoutes);
app.use(groupRoutes);
const expressServer = app.listen(PORT, () => {
  console.log("server is listening on " + PORT);
});

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
}
)
const socketport = (process.env.PORT + 1)
server.listen(socketport || 80);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected boyyyy");
});

io.on("connect", socket => {

  socket.on("sendmsg", msg => {
    io.emit("recMessage", msg);
  });
});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, "test");
  }
});

const upload = multer({ storage: storage }).single("file");

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

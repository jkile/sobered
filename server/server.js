const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "../");
mongoose.connect("mongodb://localhost/sobered_db", { useNewUrlParser: true });
const db = mongoose.connection;
const PORT = 8000;
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(express.static(publicDirectoryPath));
app.use(userRoutes);
const expressServer = app.listen(PORT, () => {
  console.log("server is listening on " + PORT);
});

server.listen(80)

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected boyyyy");
});



io.on("connect", (socket) => {
  console.log(socket.id)
  console.log("greetings")
  socket.on("sendmsg", (msg) => {
    console.log(msg)
    io.emit("recMessage", msg.message)
  })

});

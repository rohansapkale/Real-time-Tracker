const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log('User connected:', socket.id);

    socket.on("send-location", (data) => {
        console.log("Location data from user:", data);  // Log location data for debugging
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", () => {
        console.log('User disconnected:', socket.id);
        io.emit("user-disconnect", { id: socket.id });
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

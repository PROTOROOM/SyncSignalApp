import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let currentSlide = 0;

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // 초기 상태 전달
  socket.emit("slide", currentSlide);

  // 호스트에서 슬라이드 변경
  socket.on("changeSlide", (index) => {
    currentSlide = index;
    io.emit("slide", currentSlide); // 전체 broadcast
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(3000, () =>
  console.log("✅ Socket.io server running on http://localhost:3000")
);

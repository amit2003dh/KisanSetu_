// KisanSetu Server
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  socket.on("sendMessage", (msg) => {
    io.emit("receiveMessage", msg);
  });
});



const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/crops", require("./routes/cropRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/delivery", require("./routes/deliveryRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/gemini", require("./routes/geminiRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));


server.listen(5000, () => {
  console.log("Server + Socket running on 5000");
});

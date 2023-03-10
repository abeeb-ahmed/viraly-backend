import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRouters from "./routes/auth.js";
import postRouters from "./routes/posts.js";
import commentRouters from "./routes/comments.js";
import likeRouters from "./routes/likes.js";
import relationshipRouters from "./routes/relationships.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://viraly-client.onrender.com",
      "https://www.viraly-client.onrender.com",
    ],
  })
);

const PORT = process.env.PORT || 8000;

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRouters);
app.use("/api/posts", postRouters);
app.use("/api/comments", commentRouters);
app.use("/api/likes", likeRouters);
app.use("/api/relationships", relationshipRouters);

app.listen(PORT, () => {
  console.log("Connected on port " + PORT);
});

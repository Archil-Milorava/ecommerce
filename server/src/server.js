import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import errorHandler from "./middleware/errorMiddleware.js";
import path from "path";
import { BAD_REQUEST } from "./constants/http.js";

import userRoutes from "./routes/user/user.routes.js";
import productRoutes from "./routes/products/products.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development" ? "http://localhost:5173" : "https://ecommerce-ig4w.onrender.com",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/products", productRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
const bootcampsRouter = require("./routes/bootcamps.router");
const logger = require("./middlewares/logger");
const morgan = require("morgan");
const app = express();

// Middleware

// Routes
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcampsRouter);

// Error handling middleware

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV}  mode on PORT ${PORT}`
  );
});

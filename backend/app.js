const { PORT, DB_URI } = require("./config");
const routes = require("./routes");
const { connectDB } = require("./utils/mongo");
const cors = require('cors')

const express = require("express");
var cookieParser = require('cookie-parser');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true")
  next();
})
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

// Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(routes.base);
app.use("/notes", routes.notes);
app.use("/auth", routes.auth)

//connecting to the database
const start = async () => {
  try {
    await connectDB(DB_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;
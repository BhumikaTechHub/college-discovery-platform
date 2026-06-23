const express = require("express");
const cors = require("cors");
 

const authRoutes = require("./routes/auth.routes");
const collegeRoutes = require("./routes/college.routes");
const comparisonRoutes = require("./routes/comparison.routes");

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running ");
});

app.use("/api/auth", authRoutes);

app.use("/api/colleges", collegeRoutes);

app.use( "/api/saved",  
  require(  "./routes/saved.routes"  ));


app.use( "/api/comparisons", comparisonRoutes );  

module.exports = app;
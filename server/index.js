const express = require("express");
const cors = require("cors");
const decisionRoutes = require("./routes/decision");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/v1/health", (req,res) => {
  res.json({system:"EAI-SWIS",status:"online",timestamp:new Date().toISOString()});
});

app.use("/api/v1/decision", decisionRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`EAI-SWIS API running on port ${port}`));

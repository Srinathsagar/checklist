const express = require("express");
const cors = require("cors");
const checklistRoutes = require("./routes/checklist");

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use("/api", checklistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

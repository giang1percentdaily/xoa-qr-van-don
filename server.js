const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/healthz", (req, res) => res.send("ok"));

app.use(express.static(__dirname, { index: "index.html" }));

app.listen(PORT, () => {
  console.log(`Xoa QR Van Don dang chay tai cong ${PORT}`);
});

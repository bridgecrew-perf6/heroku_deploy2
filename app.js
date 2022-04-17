const app = require("express")();
const PORT = process.env.PORT || 5000;
app.get("", (req, res) => {
  res.send("Hello Amit");
});

app.listen(PORT, () => {
  console.log("App up at port ${PORT}");
});

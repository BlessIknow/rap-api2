const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    birthName: "Shéyaa Bin Abraham-Joseph",
    age: 29,
    birthLocation: "Plaistow, London, England",
  },
  "chance the rapper": {
    birthName: "Chancelor Bennett",
    age: 29,
    birthLocation: "Chicago, Illinois, USA",
  },
  " unknown": {
    birthName: "unknown",
    age: 0,
    birthLocation: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/:rappername", (req, res) => {
  const rapperName = req.params.rappername.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers[" unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`the current port ${PORT} is runing`);
});

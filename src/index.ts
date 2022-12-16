import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});

app.use("/countries", countryRoutes);

app.post('/feishu', async (req, res) => {
  console.log(req.body);
  res.json({ code: 200 });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

import express from "express";

const app = express();
const port = 3000;

let goal = "Learn Containers"; // Initial goal

app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Goal Tracker</title>
    </head>
    <body>
      <h1>Current Goal: ${goal}</h1>
      <form action="/update-goal" method="POST">
        <input type="text" name="newGoal" placeholder="Enter new goal">
        <button type="submit">Update Goal</button>
      </form>
    </body>
    </html>
  `);
});

app.post("/update-goal", (req, res) => {
  const newGoal = req.body.newGoal;
  if (newGoal) {
    goal = newGoal;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

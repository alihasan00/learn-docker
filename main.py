from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse, RedirectResponse

app = FastAPI()

goal = "Learn Containers"  # Initial goal


@app.get("/", response_class=HTMLResponse)
async def get_world():
    return f"""<!DOCTYPE html>
    <html>
    <head>
      <title>Goal Tracker</title>
    </head>
    <body>
      <h1>Current Goal: {goal}</h1>
      <form action="/update-goal" method="POST">
        <input type="text" name="newGoal" placeholder="Enter new goal">
        <button type="submit">Update Goal</button>
      </form>
    </body>
    </html>"""


@app.post("/update-goal")
async def post_update_goal(new_goal: str = Form(..., alias="newGoal")):
    global goal
    if new_goal:
        goal = new_goal
    return RedirectResponse("/", status_code=303)
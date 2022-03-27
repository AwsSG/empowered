import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from werkzeug.security import generate_password_hash, check_password_hash
from flask_pymongo import PyMongo
from datetime import datetime
import time

if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/home")
def home():
    """ landing page view """
    users = mongo.db.users.find()
    return render_template("home.html", users=users)


@app.route("/register", methods=["GET", "POST"])
def register():
    """ registration page view """
    if request.method == "POST":
        # check if the username already exist
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists!")
            return redirect(url_for("register"))

        register_user = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register_user)

        # put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful!")
        return redirect(url_for("profile", username=session["user"]))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    """ login page view """
    if request.method == "POST":
        # check if the user exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # ensure hashed password matches what the user provided
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(request.form.get("username")))
                return redirect(url_for("profile", username=session["user"]))
            else:
                # invalid password match
                flash("Incorrect username and/or password")
                return redirect(url_for("login"))

        else:
            # username does not exist
            flash("Incorrect username and/or password")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/logout")
def logout():
    """ logout function """
    # remove user from session cookie
    flash("You have been logged out successfully!")
    session.pop("user")
    return redirect(url_for("login"))


@app.route("/profile", methods=["GET", "POST"])
def profile():
    """ profile page view """
    # get todays date
    today = datetime.now().strftime("%d/%m/%y")
    # get list of all user entries
    user = list(mongo.db.tracker.find({"user": session["user"]}))
    # check if the user has entry
    if user:
        # get last entry date
        last_entry = datetime.fromtimestamp(
            user[-1]["datetime"]).date().strftime("%d/%m/%y")
        # get last entry emoji
        emoji_num = int(user[-1]["emoji"])
        # get resources that corrosponds with emoji number
        suggestions = list(mongo.db.resources.find({"emoji": emoji_num}))
    else:
        suggestions = []
        last_entry = 0
    if request.method == "POST":
        emoji = {
            "user": session["user"],
            "datetime": int(time.mktime(datetime.today().timetuple())),
            "emoji": int(request.form.get("rating")),
            "note": request.form.get("note"),
        }
        mongo.db.tracker.insert_one(emoji)
        flash("Your feelings were recorded successfully!")
        return redirect(url_for("profile", today=today,
                suggestions=suggestions, last_entry=last_entry))

    return render_template("profile.html", today=today, suggestions=suggestions, last_entry=last_entry)


@app.route("/calendar")
def calendar():
    """ calendar and analytics page view """
    emoji_tracker = list(mongo.db.tracker.find({"user": session["user"]}))
    return render_template("calendar.html", emoji_tracker=emoji_tracker)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)

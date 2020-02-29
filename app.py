import numpy as np
import json

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify,render_template,request,redirect

from flask_sqlalchemy import SQLAlchemy
import datetime as dt

from sqlalchemy import create_engine
import psycopg2
import pandas as pd
Database_URI = "postgres+psycopg2://postgres:postgres@localhost/Pokemon"
engine = create_engine(Database_URI)

data = pd.read_sql("SELECT * FROM poke_data", engine).to_json(orient='records')

y = json.loads(data)
#Flask Setup
app = Flask(__name__)

@app.route("/")
def welcome():
    """List of all the available api routes."""
    # Total =  Pokemon.query.count()
    
    return render_template("index.html")

@app.route("/get_data")
def get_data():

    return jsonify(y)

@app.route("/raw_data")
def secPage():
    return render_template("data.html")

@app.route("/append",methods=["GET","POST"])
def namefilter():

    PokemonName = request.form["pokemon_name"]

    print(PokemonName)



    return render_template('page2.html')


if __name__ == '__main__':
    app.run(debug=True)
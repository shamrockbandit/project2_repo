import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect, MetaData, Column,  Float, Integer, String

from flask import Flask, jsonify
from flask import render_template
from flask_sqlalchemy import SQLAlchemy
import datetime as dt

from sqlalchemy import create_engine
import psycopg2
import pandas as pd
Database_URI = "postgres+psycopg2://postgres:postgres@localhost/Pokemon"
engine = create_engine(Database_URI)

data = pd.read_sql("SELECT * FROM poke_data", engine)
print(data.head())

#Flask Setup
app = Flask(__name__)

@app.route("/")
def welcome():
    """List of all the available api routes."""
    # Total =  Pokemon.query.count()
    
    return (
        f"Available Routes:<br/>"
        # f"Total pokemon count is {Total}<br/>"
    )


if __name__ == '__main__':
    app.run(debug=True)
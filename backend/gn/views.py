from gn import app

import sqlite3 as sql
import json

#id, username, password, favorite sounds, recently used sounds, email
#

mp3s = {"filepath":[{"1": "../../soundfiles/1.mp3"},
                    {"2": "../../soundfiles/2.mp3"},
                    {"3": "../../soundfiles/3.mp3"},
                    {"4": "../../soundfiles/4.mp3"}]}
@app.route("/test")
def mess():
    x = 0
    for num in mp3s['filepaths']:
        x += 1
        return str(x)
@app.route("/database")
def make_db():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('CREATE TABLE IF NOT EXISTS database(id INTEGER PRIMARY KEY, filepath TEXT)')
        # cur.execute('DROP TABLE IF EXISTS database')
        return "Success"
@app.route("/populate")
def add_data():
    # return mp3s['filepaths']
    return ""

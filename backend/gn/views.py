from gn import app

import sqlite3 as sql
import json

#id, username, password, favorite sounds, recently used sounds, email
#

@app.route("/database")
def make_db():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('CREATE TABLE IF NOT EXISTS database(id INTEGER PRIMARY KEY, sound BLOB)')
		return "Success"

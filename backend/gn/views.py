from flask import request
from gn import app

import sqlite3 as sql
import json

#id, username, password, favorite sounds, recently used sounds, email

mp3s = {"mp3s":[{"filepath": "../../soundfiles/1.mp3"},
                {"filepath": "../../soundfiles/2.mp3"},
                {"filepath": "../../soundfiles/3.mp3"},
                {"filepath": "../../soundfiles/4.mp3"}]}

accounts = {"Accounts:":[{"admin": "password"},
    	  				 {"user1": "password"},
    		 			 {"user2": "password"},
    		 			 {"user3": "password"}]}

@app.route("/test") #returns number of filepaths entered in json object
def wha_t():
    a = 0
    for num in mp3s['mp3s']:
        a += 1
    return "Number of filepaths in json object" + str(a)
@app.route("/database")
def make_db():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('CREATE TABLE IF NOT EXISTS database(id INTEGER PRIMARY KEY, filepath TEXT, username TEXT)')
        # cur.execute('DROP TABLE IF EXISTS database')
        return "Success!"
@app.route("/dropdb")
def drop_db():
	con = sql.connect("main.db")
	with con:
		cur = con.cursor()
		cur.execute('DROP TABLE IF EXISTS database')
@app.route("/addinfo")
def add_data():
    a = request.args.get('a', 0, int)
    b = request.args.get('b', "", str)
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('INSERT INTO database(id, filepath) VALUES (?, ?)', (a, b))
    return "[" + str(a) + ", " + b +  "]"
@app.route("/addbyjson")
def add_data_by_json():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        jsonSize = 0
        for num in mp3s['mp3s']:
            jsonSize += 1
            cur.execute('SELECT max(id) from database')
            entries = cur.fetchall()
            cur.execute('INSERT INTO database (filepath) VALUES (?)', [num['filepath']])
    return "entries: " + str(jsonSize)
@app.route("/load")
def load_db():
	con = sql.connect("main.db")
	con.row_factory = sql.Row
	with con:
		cur = con.cursor()
		cur.execute("""
			SELECT * FROM database
			ORDER BY id""")
		rows = cur.fetchall()
		results = []
	for row in rows:
		results.append(tuple(row))
	return json.dumps(results)

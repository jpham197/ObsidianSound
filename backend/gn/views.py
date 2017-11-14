from flask import request
from gn import app

import sqlite3 as sql
import json

#id, username, password, favorite sounds, recently used sounds, email

mp3s = {"filepaths":[{"1": "../../soundfiles/1.mp3"},
                    {"2": "../../soundfiles/2.mp3"},
                    {"3": "../../soundfiles/3.mp3"},
                    {"4": "../../soundfiles/4.mp3"}]}

@app.route("/test") #returns number of filepaths entered in json object
def wha_t():
    a = 0
    for num in mp3s['filepaths']:
        a += 1
    return str(a)
@app.route("/database")
def make_db():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('CREATE TABLE IF NOT EXISTS database(id INTEGER PRIMARY KEY, filepath TEXT)')
        # cur.execute('DROP TABLE IF EXISTS database')
        return "Success!"
@app.route("/addinfo")
def add_data():
	a = request.args.get('a', 0, int)
	b = request.args.get('b', null, str)
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
        for num in mp3s['filepaths']
            jsonSize += 1
        cur.execute('SELECT max(id) from mp3s')
		entries = cur.fetchall()
    return ""
@app.route("/loadfromdb")
    return ""

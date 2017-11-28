from flask import request
from gn import app
from flask_cors import CORS, cross_origin

import sqlite3 as sql
import json

#id, username, password, favorite sounds, recently used sounds, email

mp3s = {"mp3s":[{"filepath": "../soundfiles/1.mp3"},
                {"filepath": "../soundfiles/2.mp3"},
                {"filepath": "../soundfiles/3.mp3"},
                {"filepath": "../soundfiles/4.mp3"},
                {"filepath": "../soundfiles/5 shorter ver.mp3"},
                {"filepath": "../soundfiles/6.m4a"},
                {"filepath": "../soundfiles/7.m4a"},
                {"filepath": "../soundfiles/8.m4a"},
                {"filepath": "../soundfiles/9.mp3"},
                {"filepath": "../soundfiles/10.mp3"},
                {"filepath": "../soundfiles/11.mp3"},
                {"filepath": "../soundfiles/12.mp3"},
				{"filepath": "../soundfiles/13.wav"},
                {"filepath": "../soundfiles/14.mp3"},
                {"filepath": "../soundfiles/15.wav"},
                {"filepath": "../soundfiles/16.wav"},
                {"filepath": "../soundfiles/17.wav"},
                {"filepath": "../soundfiles/18.mp3"},
                {"filepath": "../soundfiles/19.mp3"},
				{"filepath": "../soundfiles/20.mp3"},
                {"filepath": "../soundfiles/21.mp3"},
                {"filepath": "../soundfiles/22.mp3"},
                {"filepath": "../soundfiles/23.mp3"},
				{"filepath": "../soundfiles/24.mp3"},
				{"filepath": "../soundfiles/Doodlebob sound effect.mp3"}]}

accounts = {"Accounts":[{"admin": "password"},
                         {"user1": "password"},
                         {"user2": "password"},
                         {"user3": "password"}]}

accounts2 = {"Accounts":[{"username": "admin", "password": "pass123"},
                         {"username": "user1", "password": "pass123"},
                         {"username": "user2", "password": "pass123"},
                         {"username": "user3", "password": "pass123"}]}

@app.route("/test") #accessing json object test
def wha_t():
    return str(accounts['Accounts'][0]['admin'])
@app.route("/databasesounds")
def make_db_sounds():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('CREATE TABLE IF NOT EXISTS sounds(id INTEGER PRIMARY KEY, filepath TEXT)')
        return "Success!"
@app.route("/dropdb")
def drop_db():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('DROP TABLE IF EXISTS sounds')
        return "Database successfully dropped"
@app.route("/sounds-addinfo")
def add_data():
    a = request.args.get('a', 0, int)
    b = request.args.get('b', "", str)
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('INSERT INTO sounds(id, filepath) VALUES (?, ?)', (a, b))
    return "[" + str(a) + ", " + b +  "]"
@app.route("/sounds-addbyjson")
def addbyjson_sounds():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        jsonSize = 0
        cur.execute('SELECT max(id) from sounds')
        entries = cur.fetchall()
        if entries[0][0] < 25:
            for num in mp3s['mp3s']:
                jsonSize += 1
                cur.execute('INSERT INTO sounds (filepath) VALUES (?)', [num['filepath']])
    return str(entries[0][0])
@app.route("/load")
def load_db():
    con = sql.connect("main.db")
    con.row_factory = sql.Row
    with con:
        cur = con.cursor()
        cur.execute("""
            SELECT filepath FROM sounds
            ORDER BY id""")
        rows = cur.fetchall()
        results = []
    for row in rows:
        results.append(tuple(row))
    return json.dumps(results)
@app.route("/databaseaccs")
def make_db_users():
    con = sql.connect("main.db")
    with con:
        cur = con.cursor()
        cur.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username TEXT, password TEXT)')
        return "Success!"
# @app.route("/accs-addbyjson")
# def addbyjson_accs():
#     con = sql.connect("main.db")
#     with con:
#         cur = con.cursor()
#         jsonSize = 0
#         cur.execute('SELECT max(id) from users')
#         entries = cur.fetchall()
#         if entries[0][0] < 12:
#             for num in mp3s['mp3s']:
#                 jsonSize += 1
#                 cur.execute('INSERT INTO users (username, password) VALUES (?, ?)', ([num[]], num[num]))
#     return str(entries[0][0])

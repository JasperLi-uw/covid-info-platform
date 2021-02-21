from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
import utils

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("main.html")

@app.route('/c1')
def get_c1_data():
    data = utils.get_c1_data()
    return jsonify({"confirm":data[0], "exist":data[1], "recover":data[2], "death":data[3]})

@app.route("/c2")
def get_c2_data():
	data = utils.get_c2_data()
	date, confirm, exist, recover, death = [], [], [], [], []
	for dt, c, e, d, r in data:
		date.append(dt.strftime("%Y-%m-%d"))
		confirm.append(c)
		exist.append(e)
		recover.append(r)
		death.append(d)
	return jsonify({"date": date, "confirm": confirm, "exist": exist, "recover": recover, "death": death})

@app.route("/l1")
def get_l1_data():
	data = utils.get_l1_data()
	date, conf_add= [], []
	for dt, ca in data:
		date.append(dt.strftime("%Y-%m-%d"))
		conf_add.append(ca)
	return jsonify({"date": date, "conf_add": conf_add})

@app.route("/l2")
def get_l2_data():
	data = utils.get_l2_data()
	date, exist_add= [], []
	for dt, ea in data:
		date.append(dt.strftime("%Y-%m-%d"))
		exist_add.append(ea)
	return jsonify({"date": date, "exist_add": exist_add})

@app.route("/r1")
def get_r1_data():
	data = utils.get_r1_data()
	prname, confirm = [], []
	for pn, c in data:
		prname.append(pn)
		confirm.append(c)
	return jsonify({"prname": prname, "confirm": confirm})

@app.route("/r2")
def get_r2_data():
	data = utils.get_r2_data()
	date, alberta, ontario, quebec = [], [], [], []
	for dt, a, o, q in data:
		date.append(dt.strftime("%Y-%m-%d"))
		alberta.append(float(a))
		ontario.append(float(o))
		quebec.append(float(q))
	return jsonify({"date": date, "alberta": alberta, "ontario": ontario, "quebec": quebec})


@app.route('/ajax', methods=["get", "post"])
def func4():
    return '10000'

@app.route('/login')
def login():
    name = request.values.get("name")
    pwd = request.values.get("pwd")
    return f"name={name}, pwd={pwd}"

@app.route("/abc")
def hello_world1():
    id = request.values.get("id")
    return f"""
    <form action="/login">
        username: <input name="name" value="{id}"><br>
        password: <input name="pwd">
        <input type="submit">
    """

if __name__ == '__main__':
    app.run()

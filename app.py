from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

import certifi
ca = certifi.where()

from pymongo import MongoClient
client = MongoClient('mongodb+srv://JunsuLim:BIN2001kr!!~@cluster0.6mof6.mongodb.net/Cluster0?retryWrites=true&w=majority')
# client = MongoClient('mongodb+srv://test:sparta@cluster0.zgm92.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.cafe


@app.route('/')
def home():
   return render_template('index.html')

@app.route('/review')
def review():
   return render_template('review.html')

@app.route("/cafe", methods=["GET"])
def data_get():
    cafe_list = list(db.cafe.find({}, {'_id': False}))
    return jsonify({'cafe': cafe_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=2006, debug=True)
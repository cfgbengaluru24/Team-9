from flask import Flask, render_template, request, jsonify

from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/',methods=["GET"])
def home():
    return jsonify({"message":"Working fine"})

@app.route('/predictDental', methods=['POST'])
def predict_dental():
    data = request.get_json(force=True)
    return jsonify({"message":"Working Fine"})

@app.route('/predictAnemia', methods=['POST'])
def predict_anemia():
    data = request.get_json(force=True)
    return jsonify({"message":"Working fine"})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
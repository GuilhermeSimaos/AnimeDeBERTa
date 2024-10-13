from flask import Flask,render_template, jsonify
from flask_cors import CORS
from anime import retrieve_from_database
import json

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route("/")
def home():
    return "<h1>Welcome to server home page</h1>"

@app.route("/api", methods=['GET'])
def testing():
    return "🎆 CONGRATS! 🎆"

@app.route("/api/get_all_animes", methods=['GET'])
def get_all_animes():
    sql = '''SELECT * FROM [anime-dataset-2023-filtered]'''
    json_data = retrieve_from_database(sql)
    print(json_data)  # For debugging purposes
    
    try:
        # Parse the JSON string to a Python object
        data = json.loads(json_data)
        return jsonify(data)
    except json.JSONDecodeError:
        # In case of JSON parsing error, return an error response
        return jsonify({"error": "Failed to parse JSON data"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
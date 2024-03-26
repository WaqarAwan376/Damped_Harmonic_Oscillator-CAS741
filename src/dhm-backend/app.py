from flask import Flask
from flask_cors import CORS
from controller.calculations import main

app = Flask(__name__)

CORS(app, origins=["http://localhost:3000"])
app.register_blueprint(main)


if __name__ == '__main__':
    app.run(port=5000, debug=True)

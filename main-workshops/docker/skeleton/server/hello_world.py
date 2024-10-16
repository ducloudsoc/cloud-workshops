from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello World!</p>"

@app.route("/volume")
def volume():
    try:
        with open("volume.txt", 'r') as file:
            return file.read()
    except:
        return
from flask import Flask, jsonify, request,render_template
from flask_cors import CORS
import pickle
app = Flask(__name__)
cors = CORS(app)


def change_password(a):
    x = list(a)
    return x


@app.route('/', methods=['GET'])
def home():
    return render_template("index.html")


@app.route('/predict', methods=['POST'])
def predict():
    password = request.form.get('password')
    with open('../Model/password.pkl', 'rb') as f:
        model = pickle.load(f)
    with open('../Model/vect', 'rb') as f:
        tf = pickle.load(f)
    x = tf.transform([password])
    pre = model.predict(x)
    d = str(pre[0])
    return jsonify({'data': d})


if __name__ == "__main__":
    app.run(debug=True)

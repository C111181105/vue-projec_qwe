from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/rag", methods=["POST"])
def rag():
    data = request.json
    query = data.get("query", "")
    return jsonify({"response": f"你輸入了：{query}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
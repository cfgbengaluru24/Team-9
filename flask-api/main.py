from flask import Flask, render_template, request, jsonify
import numpy as np
from flask_cors import CORS
import os
import torch
from PIL import Image
from torchvision import transforms
import timm
from inference_sdk import InferenceHTTPClient

app = Flask(__name__)

classes = ['Calculus', 'Gingivitis', 'hypodontia']

CORS(app)

def load_dental_model():
    model = timm.create_model("rexnet_150", pretrained=False, num_classes=3)
    model.load_state_dict(torch.load("rexnet_150.pth", map_location=torch.device('cpu')))
    model.eval()  # Set the model to evaluation mode
    return model

dental_model = load_dental_model()

def dentalPredictor(img):
    # Ensure the image is in RGB mode
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Preprocess the image
    img = img.resize((224, 224))
    img_array = np.array(img).astype('float32') / 255.0  # Normalize the image
    img_array = np.transpose(img_array, (2, 0, 1))  # Change dimensions to (C, H, W)
    img_tensor = torch.tensor(img_array).unsqueeze(0)  # Add batch dimension
    
    # Make prediction using the loaded model
    with torch.no_grad():  # Disable gradient calculation
        outputs = dental_model(img_tensor)
        _, predicted = torch.max(outputs, 1)
        result = classes[predicted.item()]
    return result


@app.route('/', methods=["GET"])
def home():
    return jsonify({"message": "Working fine"})

@app.route('/predictAnemia', methods=['POST'])
def predict_anemia():
    data = request.get_json(force=True)
    features = data.get("features", [])
    if not features or len(features) != 3:
        return jsonify({"error": "Invalid input data. Expecting a list with 3 features."}), 400
    result = anemiaPredictor(features)
    print(result)
    return jsonify({"result": str(result)})

@app.route('/predictDental', methods=['POST'])
def predict_dental():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file:
        img = Image.open(file.stream)
        result = dentalPredictor(img)
        print(result)
        return jsonify({"result": result})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)

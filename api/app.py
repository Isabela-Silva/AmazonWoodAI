from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO
from PIL import Image
import numpy as np
import io

app = Flask(__name__)

CORS(app)

print("Carregando modelo YOLO...")
try:
    model = YOLO('best.pt')
    print("Modelo carregado com sucesso!")
except Exception as e:
    print(f"Erro ao carregar modelo: {e}")
    model = None

@app.route('/predict', methods=['POST'])
def predict():
    """
    Recebe uma imagem via POST, processa no YOLO e retorna JSON.
    """
    if not model:
        return jsonify({"error": "Modelo não está carregado"}), 500

    # Verifica se a requisição tem o arquivo 'image'
    if 'image' not in request.files:
        return jsonify({"error": "Nenhuma imagem enviada"}), 400
    
    file = request.files['image']
    
    if file.filename == '':
        return jsonify({"error": "Nome do arquivo vazio"}), 400

    try:
        
        image_bytes = file.read()
        imagem = Image.open(io.BytesIO(image_bytes))
        
        img_array = np.array(imagem)

        results = model(img_array)
        
      
        result = results[0]
        probs = result.probs
        
        response_data = {}

        if probs is not None:
            top1_index = probs.top1
            top1_nome = result.names[top1_index]
            top1_conf = float(probs.top1conf.item())

            todas_probs = []
            for class_id, class_name in result.names.items():
                probabilidade = float(probs.data[class_id].item())
                todas_probs.append({
                    "nome": class_name,
                    "certeza": probabilidade
                })
            
            todas_probs.sort(key=lambda x: x['certeza'], reverse=True)

            response_data = {
                "sucesso": True,
                "resultado_principal": {
                    "nome": top1_nome,
                    "confianca": top1_conf,
                    "eh_confiavel": top1_conf > 0.8
                },
                "todas_probabilidades": todas_probs
            }
        else:
            return jsonify({"error": "Modelo não retornou probabilidades"}), 500

        return jsonify(response_data)

    except Exception as e:
        print(f"Erro no processamento: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
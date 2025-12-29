import requests

# URL da sua API local
url = 'http://localhost:5000/predict'

# Caminho de uma imagem qualquer para teste
imagem_teste = 'teste_cedrinho.jpg' 

# Abre a imagem e envia
with open(imagem_teste, 'rb') as img:
    files = {'image': img}
    print("Enviando imagem...")
    response = requests.post(url, files=files)

# Vê o resultado
print(response.json())
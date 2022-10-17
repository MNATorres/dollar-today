import json
import requests
import os

script_dir = os.path.dirname(__file__)
base_api = "https://api-dolar-argentina.herokuapp.com/api"

dolars= [('dolaroficial', 'oficial'), ('dolarblue', 'blue'),('contadoliqui', 'ccliqui'),('dolarturista', 'turista'),('dolarbolsa', 'bolsa')]
results = {}
for url in dolars: 
    response = requests.get(base_api+"/"+url[0]).json()
    print(response)
    results[url[1]] = {"compra": response['compra'], "venta": response['venta']}

json_result = json.dumps(results)
print("Saving new JSON with data: " + json_result)
json_file = open(script_dir +"/../values.json", 'w')

json_file.write(json_result)
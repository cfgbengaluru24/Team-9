import requests

# url = 'http://127.0.0.1:5000/predictAnemia'
# payload = {"features": [0, 9.0, 71.2]}
# headers = {'Content-Type': 'application/json'}
#response = requests.post(url, json=payload, headers=headers)
url = 'http://127.0.0.1:5000/predictDental'
filepath = r'C:\Users\anany\Desktop\Team-9\flask-api\testimg.png'
# Open the file in binary mode
with open(filepath, 'rb') as img:
    files = {'file': img}
    response = requests.post(url, files=files)

print(response.status_code)
print(response.text) 

try:
    json_response = response.json()
    print(json_response)
except requests.exceptions.JSONDecodeError:
    print("Response content is not valid JSON")

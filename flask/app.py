# TODO build application-monitoring Empower Plant backend
# TODO add app.yaml here and application-monitoring-flask service. application-monitoring can be react.

# import os
from flask import Flask, request, json, abort, make_response, jsonify
from flask import Flask
# from flask_cors import CORS
# from dotenv import load_dotenv
# from dotenv import load_dotenv
# import sentry_sdk
# from sentry_sdk.integrations.flask import FlaskIntegration
# load_dotenv()

# DSN = os.getenv("FLASK_APP_DSN")

# def before_send(event, hint):
#     if event['request']['method'] == 'OPTIONS':
#         return null
#     return event

# sentry_sdk.init(
#     dsn= DSN
#     traces_sample_rate=1.0,
#     integrations=[FlaskIntegration()],
#     release=RELEASE,
#     environment="production",
#     before_send=before_send
# )

app = Flask(__name__)
# CORS(app)

@app.route('/success', methods=['GET'])
def success():    
    print('/success')
    # response = make_response("success")
    return "success"

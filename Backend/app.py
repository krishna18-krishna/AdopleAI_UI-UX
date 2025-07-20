# app.py
import stripe
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import uvicorn  
from dotenv import load_dotenv

load_dotenv()

STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY")

stripe.api_key = STRIPE_SECRET_KEY
app = FastAPI()

# Allow frontend to access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.adople.ai"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class CreatePaymentIntentRequest(BaseModel):
    amount: int  # In cents

@app.post("/create-payment-intent")
def create_payment_intent(data: CreatePaymentIntentRequest):
    intent = stripe.PaymentIntent.create(
        amount=data.amount,
        currency='usd',
        automatic_payment_methods={"enabled": True},
    )
    return {"clientSecret": intent.client_secret}


@app.post("/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    webhook_secret = "whsec_ckvxyfjSypaYOiC0qIfT9eTQ32OBRT2e"

    try:
        event = stripe.Webhook.construct_event(payload, sig_header, webhook_secret)
    except Exception as e:
        return {"error": str(e)}

    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        print("Payment succeeded:", payment_intent['id'])

    return {"status": "success"}

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)


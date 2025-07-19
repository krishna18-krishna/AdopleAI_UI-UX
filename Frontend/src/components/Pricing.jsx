import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import {
  FiCreditCard,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';

// Stripe publishable key
const stripePromise = loadStripe('pk_test_51RmG6PIpFCZpCwt5u8PwwmJtt2fGoAy8vall9IfUZ4N6Ml7jjM0A2gZImQFNZY27uIBfIBtMVPgCay0AarVvFloK00y5NHeSUN');

// Payment form component
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    setStatus('');

    try {
      const res = await axios.post('https://adople-backend-atf2deadf3dwc2hk.canadacentral-01.azurewebsites.net/api/pricing', {
        amount: 1000,
      });

      const { clientSecret } = res.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setStatus({
          type: 'error',
          message: `Payment failed: ${result.error.message}`,
        });
        setIsLoading(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          setStatus({
            type: 'success',
            message: 'Payment succeeded! 🎉',
          });
          setPaymentSucceeded(true);
          setIsLoading(false);
        }
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPaymentSucceeded(false);
    setStatus('');
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        fontFamily: '"Helvetica Neue", sans-serif',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
      },
    },
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg animate-fade-in p-4">
      {paymentSucceeded ? (
        <div className="text-center p-6">
          <FiCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="mb-4">Your order has been processed.</p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Make Another Payment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex items-center mb-1 text-blue-600">
              <FiCreditCard className="mr-1.5" />
              <label className="font-medium" htmlFor="card-element">
                Card Details
              </label>
            </div>
            <div className="p-3 border rounded-lg">
              <CardElement
                options={cardElementOptions}
                id="card-element"
                className="p-2"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!stripe || isLoading}
            className={`w-full flex justify-center items-center py-3 px-4 rounded-lg font-medium ${
              (!stripe || isLoading)
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isLoading ? (
              <>
                <FiLoader className="animate-spin mr-2" />
                Processing...
              </>
            ) : (
              'Pay $10.00'
            )}
          </button>

          {status && (
            <div
              className={`p-3 rounded-lg flex items-start ${
                status.type === 'error'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              {status.type === 'error' ? (
                <FiAlertCircle className="mr-2 mt-0.5 flex-shrink-0" />
              ) : (
                <FiCheckCircle className="mr-2 mt-0.5 flex-shrink-0" />
              )}
              <span>{status.message}</span>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

// Pricing plan component
function PricingPlans({ onBuyNow }) {
  const features = [
    'Increased usage limits across chat, file uploads, and search',
    'Access to advanced AI features and structured deep research (StructRAG, LightGraphRAG)',
    'Secure SSO (OIDC/SAML/OAuth2), RBAC, and audit logging',
    'Real-time document indexing and enhanced multi-source search',
  ];

  return (
    <div className="flex justify-center items-start bg-gray-50">
      <div className="bg-white border-2 border-blue-500 rounded-xl shadow-lg px-8 py-4 w-full max-w-md flex flex-col items-start">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Pro Plan</h3>
        <p className="text-3xl font-bold text-blue-700 mb-2">
          $10 <span className="text-base text-gray-500">USD/month</span>
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-semibold mb-4 transition"
          onClick={onBuyNow}
        >
          Buy Now
        </button>
        <ul className="list-none p-0 text-left w-full space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="text-gray-700 text-base flex items-center">
              <span className="text-green-500 mr-2">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Main page
export default function Pricing() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-2">
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
        {/* Pricing Plan */}
        <div className="flex-1">
          <PricingPlans onBuyNow={() => setShowPayment(true)} />
        </div>

        {/* Payment Form */}
        {showPayment && (
          <div className="flex-1">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style>
        {`
          .animate-fade-in {
            animation: fade-in 0.5s ease-out both;
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

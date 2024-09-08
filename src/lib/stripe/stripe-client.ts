import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = (connectedAccountId?: string): Promise<Stripe | null> => {
  if (!stripePromise) {
    // Load Stripe instance only once and cache it
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',  // Use your Stripe public key
      { stripeAccount: connectedAccountId }  // Optional: connected account ID
    );
  }
  return stripePromise;  // Return the promise directly
};

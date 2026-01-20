export interface Game {
  id: string;
  name: string;
  publisher: string;
  currencyName: string;
  image: string;
  coverImage: string;
  description: string;
  packages: Package[];
  inputLabel: string; // e.g., "Player ID", "UID", "Riot ID"
  placeholder: string;
}

export interface Package {
  id: string;
  amount: number;
  bonus: number;
  price: number;
  currency: string;
  popular?: boolean;
}

export enum PaymentMethod {
  CREDIT_CARD = 'Credit Card',
  PAYPAL = 'PayPal',
  CRYPTO = 'Crypto',
  GPAY = 'Google Pay'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface TransactionState {
  status: 'idle' | 'processing' | 'success' | 'error';
  message?: string;
}
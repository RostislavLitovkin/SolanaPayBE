import { Cluster, clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { encodeURL, createQR } from '@solana/pay';
import BigNumber from 'bignumber.js';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }

  // Variable to keep state of the payment status
  let paymentStatus;

  // Connecting to devnet for this example
  console.log('1. ✅ Establish connection to the network');
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  res.status(200).json({ name: 'John Doe' })
}

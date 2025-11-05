/**
 * Example: Generate a new Bitcoin address using bitcoinjs-lib.
 * This simple script creates a random key pair and logs
 * the corresponding P2WPKH (SegWit) address.
 */

import * as bitcoin from 'bitcoinjs-lib';

export function generateSegWitAddress() {
  const keyPair = bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey });
  console.log('Your new Bitcoin address:', address);
  return address;
}

// Uncomment below line for direct execution
// generateSegWitAddress();

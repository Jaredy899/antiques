/**
 * Add window.ethereum type definition
 */
declare global {
  interface Window {
    ethereum?: unknown;
  }
}

/**
 * Safely check if ethereum is available in the browser
 * This helps prevent errors from browser extensions or wallets
 */
export const isEthereumAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.ethereum !== 'undefined';
};

/**
 * General helper to safely access window properties
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
}; 
import { MILLION, THOUSAND } from '@/models';

export function formatAmountToCurrency (amount?: number): string {
  if (!amount) {
    return 'Unknown';
  }
  let formattedAmountString = amount.toString();

  if (Math.abs(amount) >= MILLION) {
    formattedAmountString = (amount / MILLION).toFixed(2) + ' M';
  } else if (Math.abs(amount) >= THOUSAND) {
    formattedAmountString = (amount / THOUSAND).toFixed(2) + ' K';
  } else {
    formattedAmountString = amount.toFixed(2);
  }

  return `$${formattedAmountString}`;
}

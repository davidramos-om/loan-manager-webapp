export const formatNumber = (value: number, currency: string, digits: number = 2): string => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

  return formattedValue;
};

export const formatDecimal = (value: number, digits: number = 2): string => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

  return formattedValue;
};

export const formatInteger = (value: number): string => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'decimal',
  }).format(value);

  return formattedValue;
};

export const formatPercentage = (value: number, digits: number = 2): string | null => {
  if (value < 0 || value > 100) {
    console.error('Invalid percentage value. Please provide a value between 0 and 100.');
    return null;
  }

  const formattedPercentage = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value / 100);

  return formattedPercentage;
};

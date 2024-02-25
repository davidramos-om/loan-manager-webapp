import { MortgageCalculator } from 'src/rules/MortgageCalculator';
import { newId } from 'src/utils/string/ids';
import { appVersion } from 'src/utils/string/versions';
import { BaseRecord } from './BaseRecord';

export interface LoanCalcDefaults {
  years: number;
  interest: number;
  downPayment: number;
}

export interface LoanRecordDetails {
  date: number;
  month: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface LoanRecord extends BaseRecord {
  isDraft: boolean;
  amount: number;
  interestRate: number;
  downPayment: number;
  months: number;
  principal: number;
  details: LoanRecordDetails[];
}

export const parseDefaultLoanCalcValues = (object: { years: number; interest: number; downPayment: number }): LoanCalcDefaults => {
  const { years, interest, downPayment } = object || {};
  const parsed: LoanCalcDefaults = {
    years: years || 0,
    interest: interest || 0,
    downPayment: downPayment || 0,
  };
  return parsed;
};

export const parseLoanRecord = (object: LoanRecord): LoanRecord => {
  const { id, date, name, description, image, isDraft, amount, interestRate, downPayment, months, principal, details, appVersion } = object || {};

  const parsedDetails = Array.isArray(details)
    ? details.map((detail) => {
        const d: LoanRecordDetails = {
          date: detail.date || 0,
          month: detail.month || 0,
          principal: detail.principal || 0,
          interest: detail.interest || 0,
          balance: detail.balance || 0,
        };
        return d;
      })
    : [];

  const parsed: LoanRecord = {
    id: id || '',
    date: date || 0,
    name: name || '',
    description: description || '',
    image: image === 'test' ? '' : image || '',
    isDraft: isDraft || false,
    amount: amount || 0,
    interestRate: interestRate || 0,
    downPayment: downPayment || 0,
    months: months || 0,
    principal: principal || 0,
    details: parsedDetails,
    appVersion: appVersion || '',
  };

  return parsed;
};

export const transformToLoanRecord = ({
  name,
  image,
  draft,
  description,
  mortgage,
}: {
  name: string;
  description: string;
  image: string;
  draft: boolean;
  mortgage: MortgageCalculator;
}): LoanRecord => {
  const { loanAmount, interestRate, downPaymentPercentage, loanTermMonths, paymentSchedule, principal } = mortgage.getValues();

  const details = paymentSchedule.map((payment) => {
    const { month, principal, interest, balance } = payment;
    const d: LoanRecordDetails = {
      date: Date.now(),
      month,
      principal,
      interest,
      balance,
    };
    return d;
  });

  const loanRecord: LoanRecord = {
    id: newId(),
    date: Date.now(),
    name,
    description,
    image,
    isDraft: draft,
    amount: loanAmount,
    interestRate: interestRate,
    downPayment: downPaymentPercentage,
    months: loanTermMonths,
    principal,
    details,
    appVersion: appVersion(),
  };

  return loanRecord;
};

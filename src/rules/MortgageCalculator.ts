import { Logger } from './Logger';

type MortgageCalculatorProps = {
  loanAmount: number;
  downPaymentPercentage: number;
  interestRate: number;
  loanTermMonths: number;
};

type PaymentSchedule = {
  month: number;
  principal: number;
  interest: number;
  balance: number;
};

export class MortgageCalculator {
  private loanAmount: number;
  private downPaymentPercentage: number;
  private downPaymentAmount: number;
  private interestRate: number;
  private loanTermMonths: number;
  private paymentSchedule: Array<PaymentSchedule>;
  private monthlyPayment: number;
  private principal: number;
  private logger: Logger = new Logger();

  constructor(params: MortgageCalculatorProps) {
    this.loanAmount = params.loanAmount;
    this.downPaymentPercentage = params.downPaymentPercentage;
    this.interestRate = params.interestRate;
    this.loanTermMonths = params.loanTermMonths;
    this.paymentSchedule = new Array<PaymentSchedule>();
    this.downPaymentAmount = 0;
    this.monthlyPayment = 0;
    this.principal = 0;
  }

  calculate() {
    // Convert down payment percentage to decimal
    this.downPaymentAmount = (this.downPaymentPercentage / 100) * this.loanAmount;

    // Calculate loan amount after down payment
    this.principal = this.loanAmount - this.downPaymentAmount;

    // Monthly interest rate
    const monthlyInterestRate: number = this.interestRate / 100 / 12;

    // Number of monthly payments
    const numberOfPayments: number = this.loanTermMonths;

    // Monthly payment calculation using the formula for fixed monthly payments
    this.monthlyPayment =
      (this.principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    this.generatePaymentSchedule();
  }

  private generatePaymentSchedule() {
    if (this.paymentSchedule.length > 0) return this.paymentSchedule;

    let balance = this.principal;
    for (let month = 1; month <= this.loanTermMonths; month++) {
      const interestPayment = (balance * (this.interestRate / 100)) / 12;
      const principalPayment = this.monthlyPayment - interestPayment;
      balance -= principalPayment;

      this.paymentSchedule.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        balance,
      });
    }
  }

  private calculateTotalInterestPaid(): number {
    const totalInterestPaid = this.paymentSchedule.reduce(
      (total, payment) => total + payment.interest,
      0
    );
    return totalInterestPaid;
  }

  private calculateTotalLoanCost(): number {
    const totalInterestPaid = this.calculateTotalInterestPaid();
    const totalLoanCost = this.loanAmount + totalInterestPaid;
    return totalLoanCost;
  }

  getValues() {
    return {
      loanAmount: this.loanAmount,
      principal: this.principal,
      downPaymentPercentage: this.downPaymentPercentage,
      downPaymentAmount: this.downPaymentAmount,
      interestRate: this.interestRate,
      loanTermMonths: this.loanTermMonths,
      monthlyPayment: this.monthlyPayment,
      paymentSchedule: this.paymentSchedule,
      totalInterestPaid: this.calculateTotalInterestPaid(),
      totalLoanCost: this.calculateTotalLoanCost(),
    };
  }

  prettyPrintSchedule(): void {
    const totalInterestPaid = this.calculateTotalInterestPaid();
    const totalLoanCost = this.calculateTotalLoanCost();
    this.logger.debug('\n\nAmortization Schedule:');
    this.logger.debug(`   Loan Amount: $${this.loanAmount.toFixed(2)}`);
    this.logger.debug(`   Principal: $${this.principal.toFixed(2)}`);
    this.logger.debug(`   Interest Rate: ${this.interestRate}%`);
    this.logger.debug(`   Down Payment Percentage: ${this.downPaymentPercentage}%`);
    this.logger.debug(`   Down Payment Amount: ${this.downPaymentAmount.toFixed(2)}`);
    this.logger.debug(`   Loan Term: ${this.loanTermMonths} months`);
    this.logger.debug(`   Monthly Payment: $${this.monthlyPayment.toFixed(2)}`);
    this.logger.debug(`   Total Interest Paid: $${totalInterestPaid.toFixed(2)}`);
    this.logger.debug(`   Total Loan Cost: $${totalLoanCost.toFixed(2)}`);
    this.logger.debug('   |   Month  |  Principal  |  Interest  |  Balance  |');

    this.paymentSchedule.forEach((payment) => {
      this.logger.debug(
        `   |   ${payment.month.toString().padStart(6, ' ')}  |  $${payment.principal
          .toFixed(2)
          .padStart(10, ' ')}  |  $${payment.interest
          .toFixed(2)
          .padStart(9, ' ')}  |  $${payment.balance.toFixed(2).padStart(8, ' ')}  |`
      );
    });
  }
}

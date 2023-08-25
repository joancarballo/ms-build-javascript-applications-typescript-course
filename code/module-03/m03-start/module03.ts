/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
    principle: number,
    interestRate: number,
}


/*  TODO: Declare the ConventionalLoan interface. */

interface ConventionalLoan extends Loan {
    months: number      //* Total number of months
}

/*  More Tests: Declare the ConventionalLoanCarballo interface. */

interface ConventionalLoanCarballo extends Loan {
    isCarballo?: boolean      //* Total number of months
}


/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200 // Calculates the Monthly Interest Rate of the loan
    let payment
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

/* More Tests */

function calculateConventionalLoanPaymentCarballo(loanTerms: ConventionalLoanCarballo): string {
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.isCarballo ? 0 : loanTerms.principle * interest;
    return payment === 0? 'Hi, Carballo! The loan payment is ' + payment.toFixed(2) : 'The conventional loan payment is ' + payment.toFixed(2);
}

let LoanData = {
    principle: 30000,
    interestRate: 5
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });

let LoanDataCarballo = {...LoanData, isCarballo: true,}

let interestOnlyPaymentCarballo = calculateConventionalLoanPaymentCarballo(LoanDataCarballo);

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"
console.log(interestOnlyPaymentCarballo);     //* Returns "The conventional loan payment is 237.24"

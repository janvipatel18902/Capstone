import { useState } from "react";
import "./mortgageCal.scss";

function MortgageCal() {
  const [mortgageType, setMortgageType] = useState("home");
  const [propertyPrice, setPropertyPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(0);
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);
  const [interestType, setInterestType] = useState("fixed");
  const [rate, setRate] = useState(5.0);
  const [years, setYears] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMinimumDownPayment = (price) => {
    if (price < 500000) return price * 0.05;
    else if (price < 1000000) return 500000 * 0.05 + (price - 500000) * 0.10;
    else return price * 0.20;
  };

  const handlePropertyPriceChange = (e) => {
    const price = parseFloat(e.target.value) || 0;
    setPropertyPrice(price);
    const minDownPayment = calculateMinimumDownPayment(price);
    setDownPayment(minDownPayment);
    setDownPaymentPercentage(((minDownPayment / price) * 100).toFixed(2));
    setMortgageAmount(price - minDownPayment);
  };

  const handleDownPaymentChange = (e) => {
    const dp = parseFloat(e.target.value) || 0;
    setDownPayment(dp);
    const percentage = (dp / propertyPrice) * 100;
    setDownPaymentPercentage(percentage.toFixed(2));
    setMortgageAmount(propertyPrice - dp);
  };

  const calculateMortgage = () => {
    let loanAmount = mortgageType === "home" ? mortgageAmount : remainingBalance;
    if (loanAmount > 0 && rate > 0 && years > 0) {
      const monthlyRate = rate / 100 / 12;
      const numPayments = years * 12;
      const monthly = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
      setMonthlyPayment(monthly.toFixed(2));
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
    <div className="mortgageCal">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Mortgage Calculator</h1>
          <p>Calculate your estimated monthly mortgage payment.</p>
          <div className="inputFields">
            <label>Mortgage Type:</label>
            <select value={mortgageType} onChange={(e) => setMortgageType(e.target.value)}>
              <option value="home">Home Purchase</option>
              <option value="refinance">Refinance</option>
            </select>

            {mortgageType === "home" && (
              <>
                <label>Property Price ($):</label>
                <input
                  type="number"
                  placeholder="Enter property price"
                  value={propertyPrice}
                  onChange={handlePropertyPriceChange}
                />
                <label>Minimum Down Payment Required: ${calculateMinimumDownPayment(propertyPrice)}</label>
                <label>Down Payment ($):</label>
                <input
                  type="number"
                  placeholder="Enter down payment"
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                />
                <p>Down Payment Percentage: {downPaymentPercentage}%</p>
                <p>Mortgage Amount: ${mortgageAmount}</p>
              </>
            )}

            {mortgageType === "refinance" && (
              <>
                <label>Remaining Balance ($):</label>
                <input
                  type="number"
                  placeholder="Enter remaining balance"
                  value={remainingBalance}
                  onChange={(e) => setRemainingBalance(parseFloat(e.target.value) || 0)}
                />
              </>
            )}

            <label>Interest Type:</label>
            <select value={interestType} onChange={(e) => setInterestType(e.target.value)}>
              <option value="fixed">Fixed Interest</option>
              <option value="variable">Variable Interest</option>
            </select>

            <label>Annual Interest Rate (%):</label>
            <input
              type="number"
              placeholder="Enter interest rate"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
            />

            <label>Loan Term (years):</label>
            <input
              type="number"
              placeholder="Enter loan term"
              value={years}
              onChange={(e) => setYears(parseFloat(e.target.value) || 0)}
            />

            <button onClick={calculateMortgage}>Calculate</button>
          </div>

          {monthlyPayment !== null && (
            <div className="result">
              <h2>Estimated Monthly Payment: ${monthlyPayment}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MortgageCal;

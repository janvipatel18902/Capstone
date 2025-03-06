import { useState } from "react";
import "./mortgageCal.scss";

function MortgageCal() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    if (principal > 0 && rate > 0 && years > 0) {
      const monthlyRate = rate / 100 / 12;
      const numPayments = years * 12;
      const monthly =
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numPayments));
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
            <input
              type="number"
              placeholder="Loan Amount ($)"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
            <input
              type="number"
              placeholder="Annual Interest Rate (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <input
              type="number"
              placeholder="Loan Term (years)"
              value={years}
              onChange={(e) => setYears(e.target.value)}
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
      <div className="imgContainer">
        <img src="/bg.jpg" alt="Mortgage" />
      </div>
    </div>
  );
}

export default MortgageCal;

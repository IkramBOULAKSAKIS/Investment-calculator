import { formatter } from "../util/investment.js";

export default function Results({ resultsData }) {
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map(
            ({ year, valueEndOfYear, interest, annualInvestment }) => {
              const totalInterest = valueEndOfYear - annualInvestment * year;
              const totalAmountInvested = valueEndOfYear - totalInterest;
              return (
                <tr key={year}>
                  <td>{year}</td>
                  <td>{formatter.format(valueEndOfYear)}</td>
                  <td>{formatter.format(interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

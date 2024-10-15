import React from 'react';

function PlanTable() {
  const plans = [
    {
      bid: 2,
      current: "In-Network: Copay $10 OON: Copay 20%",
      future: "In-Network: Copay $25 OON: Copay 25%",
      json: "In-Network: Copay $25",
      logic: "Retained value from Future Standard"
    },
    {
      bid: 3,
      current: "In-Network: Copay $10 OON: Copay 20%",
      future: "In-Network: Copay $35 OON: Copay 30%",
      json: "In-Network: Copay $35",
      logic: "Retained value from Current Custom Plan"
    },
    // Add more rows as needed
  ];

  return (
    <table className="plan-table">
      <thead>
        <tr>
          <th>Bid</th>
          <th>Current Custom Plan</th>
          <th>Future Standard Plan</th>
          <th>RPS Constructed Plan JSON</th>
          <th>RPS Constructed Benefit Data Logic</th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan, index) => (
          <tr key={index}>
            <td>{plan.bid}</td>
            <td>{plan.current}</td>
            <td>{plan.future}</td>
            <td>{plan.json}</td>
            <td>{plan.logic}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlanTable;

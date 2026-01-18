import { useEffect, useState } from "react";

const Analytics = () => {
  const [funnel, setFunnel] = useState(null);

  useEffect(() => {
    // Mock data
    setFunnel({
      booked: 20,
      attended: 14,
      interested: 9,
      paid: 5,
    });
  }, []);

  if (!funnel) return <p className="mt-4">Loading analytics...</p>;

  return (
    <div className="container mt-4">
      <h2>Funnel Analytics</h2>
      <ul className="list-group w-50">
        <li className="list-group-item">Booked: {funnel.booked}</li>
        <li className="list-group-item">Attended: {funnel.attended}</li>
        <li className="list-group-item">Interested: {funnel.interested}</li>
        <li className="list-group-item">Paid: {funnel.paid}</li>
      </ul>
    </div>
  );
};

export default Analytics;

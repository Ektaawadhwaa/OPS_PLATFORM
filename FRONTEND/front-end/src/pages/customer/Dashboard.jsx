import { useState } from "react";

const initialSchedule = [
  { class_name: "Chess 101", time: "10:00 AM" },
  { class_name: "Chess Advanced", time: "3:00 PM" },
];

const CustomerDashboard = () => {
  const [schedule] = useState(initialSchedule);
  const [paid, setPaid] = useState(false); // Track if payment done

  const joinClass = (c) => alert(`Joining class: ${c.class_name}`);
  const requestReview = () => alert("Requesting 15-min review session...");

  const payNow = () => {
    // Mock payment flow
    const success = window.confirm("Simulate payment success?");
    if (success) {
      alert("Payment successful!");
      setPaid(true);
    } else {
      alert("Payment failed!");
      setPaid(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Customer Dashboard</h2>

      {!paid && (
        <div className="mb-3">
          <button className="btn btn-warning" onClick={payNow}>
            Pay Now
          </button>
        </div>
      )}

      {paid && <div className="alert alert-success">Payment Completed ✅</div>}

      <h4>Weekly Schedule</h4>
      <ul className="list-group mb-3">
        {schedule.map((c, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {c.class_name} - {c.time}
            <button className="btn btn-success btn-sm" onClick={() => joinClass(c)}>
              Join
            </button>
          </li>
        ))}
      </ul>

      <button className="btn btn-primary" onClick={requestReview}>
        Request 15-min Review
      </button>
    </div>
  );
};

export default CustomerDashboard;

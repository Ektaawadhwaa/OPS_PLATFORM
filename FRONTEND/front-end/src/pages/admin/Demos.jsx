import { useState } from "react";

const initialDemos = [
  { student_name: "Alice", parent_name: "Bob", status: "BOOKED" },
  { student_name: "Charlie", parent_name: "David", status: "ATTENDED" },
];

const AdminDemos = () => {
  const [demos, setDemos] = useState(initialDemos);

  const markAttendance = (i) => {
    const newDemos = [...demos];
    newDemos[i].status = "ATTENDED";
    setDemos(newDemos);
  };

  const updateStatus = (i) => {
    const newDemos = [...demos];
    const nextStatus = prompt("Enter new status:", newDemos[i].status);
    if (nextStatus) newDemos[i].status = nextStatus.toUpperCase();
    setDemos(newDemos);
  };

  return (
    <div className="container mt-4">
      <h2>Demos</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Student</th>
            <th>Parent</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {demos.map((demo, i) => (
            <tr key={i}>
              <td>{demo.student_name}</td>
              <td>{demo.parent_name}</td>
              <td>
                <span className="badge bg-info">{demo.status}</span>
              </td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => markAttendance(i)}
                >
                  Mark Attendance
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => updateStatus(i)}
                >
                  Update Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDemos;


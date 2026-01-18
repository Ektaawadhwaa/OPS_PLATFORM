import { useState } from "react";

const initialStudents = [
  { student_name: "Alice", assigned_coach: "Coach John", batch: "Group A" },
  { student_name: "Charlie", assigned_coach: "Coach Jane", batch: "1-1" },
];

const Students = () => {
  const [students, setStudents] = useState(initialStudents);

  const assignCoach = (i) => {
    const newStudents = [...students];
    const coach = prompt("Enter coach name:", newStudents[i].assigned_coach);
    if (coach) newStudents[i].assigned_coach = coach;
    setStudents(newStudents);
  };

  const assignBatch = (i) => {
    const newStudents = [...students];
    const batch = prompt("Enter batch:", newStudents[i].batch);
    if (batch) newStudents[i].batch = batch;
    setStudents(newStudents);
  };

  return (
    <div className="container mt-4">
      <h2>Students</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Student</th>
            <th>Coach</th>
            <th>Batch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.student_name}</td>
              <td>{s.assigned_coach}</td>
              <td>{s.batch}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => assignCoach(i)}
                >
                  Assign Coach
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => assignBatch(i)}
                >
                  Assign Batch
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;

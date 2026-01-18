import { useState } from "react";

const initialBatches = [
  { batch_name: "Group A", students: 5 },
  { batch_name: "1-1", students: 1 },
];

const CoachDashboard = () => {
  const [batches, setBatches] = useState(initialBatches);

  const uploadHomework = (i) => alert(`Upload homework for ${batches[i].batch_name}`);
  const uploadLesson = (i) => alert(`Upload lesson material for ${batches[i].batch_name}`);

  return (
    <div className="container mt-4">
      <h2>Coach Dashboard</h2>
      {batches.map((b, i) => (
        <div key={i} className="card mb-2 p-2">
          <h5>{b.batch_name}</h5>
          <p>Students: {b.students}</p>
          <button className="btn btn-primary btn-sm me-2" onClick={() => uploadLesson(i)}>
            Upload Lesson
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => uploadHomework(i)}>
            Upload Homework
          </button>
        </div>
      ))}
    </div>
  );
};

export default CoachDashboard;

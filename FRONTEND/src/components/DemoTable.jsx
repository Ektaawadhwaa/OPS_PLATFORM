const DemoTable = ({ demos }) => {
  if (!Array.isArray(demos)) {
    return <p>No demos available</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>Parent</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {demos.map((demo, index) => (
          <tr key={index}>
            <td>{demo.student_name}</td>
            <td>{demo.parent_name}</td>
            <td>{demo.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DemoTable;

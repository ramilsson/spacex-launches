export function LaunchPayloads({ payloads }) {
  const payloadRows = payloads.map((payload) => (
    <tr key={payload.payload_id}>
      <td>{payload.payload_id}</td>
      <td>{payload.payload_type}</td>
      <td>{payload.manufacturer}</td>
    </tr>
  ));

  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>{payloadRows}</tbody>
      </table>
    </div>
  );
}

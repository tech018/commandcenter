export default function Table({ data }) {
  if (data.length > 0) {
    const headers = Object.keys(data[0]);
    return (
      <div class="container">
        <table class="responsive-table">
          <thead style={{ backgroundColor: "rgba(0, 0, 0, 0.438)" }}>
            <tr style={{ textTransform: "capitalize", margin: "10px" }}>
              {headers.map((header) => (
                <th scope="col" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <>
                    {header === "plateNumber" ? (
                      <th scope="row" key={header}>
                        {row[header]}
                      </th>
                    ) : (
                      <td key={header}>{row[header]}</td>
                    )}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <span>no records</span>;
  }
}

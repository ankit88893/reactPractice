import { useEffect, useState } from "react";

function Api() {
  const [countries, setCountries] = useState([]);

  const fetchata = async () => {
    const response = await fetch(
      "https://api.sampleapis.com/countries/countries"
    );
    const data = await response.json();
    console.log(data);

    //use only 3 sample data
    setCountries(data);
  };

  useEffect(() => {
    // Call the function
    fetchata();
  }, []);

  return (
    <>
      {
        <table>
          <thead>
            <tr>
              <th>country</th>
              <th>capital</th>
              <th>flag</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, key) => (
              <tr key={key}>
                <td >{country.name}</td>
                <td >{country.capital}</td>
                <td >
                  <img
                    width="20px"
                    height="10px"
                    src={country.media.flag}
                    alt="flag"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}
export default Api;

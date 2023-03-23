import { useEffect, useState } from "react";

function Random() {
  const [countries, setCountries] = useState([]);

  const fetchata = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    console.log(data.results);
    
      setCountries(data.results);
    

    //use only 3 sample data
  };

  useEffect(() => {
    // Call the function
    fetchata();
  }, []);

  return (
    <div className="App">
      <h1>List of Countries</h1>
      <table>
        <thead>
          <tr>
            <th>Gender</th>
            <th>Name</th>
            <th>Email</th>
            <th>picture</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((data) => (
            <tr key={data.id.name}>
              <td>{data.gender}</td>
              <td>{data.name.first}</td>
              <td>{data.email}</td>
              <td>
                <img
                 
                  src={data.picture.medium}
                  alt="flag"
                />
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Random;

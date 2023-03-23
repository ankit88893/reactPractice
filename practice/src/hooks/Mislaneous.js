//display array of users
// const users = [
//   { name: "John Doe", id: 1 },
//   { name: "Jane Doe", id: 2 },
//   { name: "Billy Doe", id: 3 },
// ];

// const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

// function App() {
//   return (
//     <>
//       <h3>User names</h3>
//       <ul>{userItems}</ul>
//     </>
//   );
// }


//----------------------------------------------------------------------------------------------------------------------------------

// two way binding
// function App() {
//   const [value, setValue] = React.useState("");

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter Text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <p>{value}</p>
//     </>
//   );
// }
//----------------------------------------------------------------------------------------------------------------------------------


// function App() {
//   const [value, setValue] = React.useState("");

//   return (
//     <>
//       <h3>Disable Button Challenge</h3>
//       <input type="text" onChange={(e) => setValue(e.target.value)} />
//       <button disabled={value.length < 1}>Submit</button>
//     </>
//   );
// }
//----------------------------------------------------------------------------------------------------------------------------------

// function App() {
//   const [value, setValue] = React.useState("");

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter Text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <p>{value}</p>
//     </>
//   );
// }
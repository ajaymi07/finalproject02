import React, { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const findSum = () => {
    const n = parseInt(num);

    if (isNaN(n) || n < 1) {
      setResult("Please enter a valid positive number.");
      return;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    setResult(`Sum from 1 to ${n} = ${sum}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px gray",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h2>Sum of N Numbers</h2>

        <input
          type="number"
          placeholder="Enter a number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          style={{
            width: "80%",
            padding: "10px",
            marginBottom: "15px",
            fontSize: "16px",
          }}
        />

        <br />

        <button
          onClick={findSum}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Calculate Sum
        </button>

        <h3 style={{ color: "green", marginTop: "20px" }}>
          {result}
        </h3>
      </div>
    </div>
  );
}

export default App;
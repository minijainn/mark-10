import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [billAmt, setBillAmt] = useState("");
  const [moneyPaid, setmoneyPaid] = useState("");
  const notes = [2000, 500, 200, 100, 20, 10, 5, 2, 1];
  const [noteTracker, setNoteTracker] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  function calculate() {
    if (billAmt && moneyPaid) {
      let cashDiff = parseInt(moneyPaid) - parseInt(billAmt);
      if (cashDiff < 0) {
        alert("Please Pay a Valid Amount");
        return;
      } else if (cashDiff === 0) {
        alert("Thanks for shopping!");
        return;
      } else if (cashDiff > 0) {
        const arrToUpdate = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        while (cashDiff !== 0) {
          for (let i = 0; i < notes.length; i++) {
            if (cashDiff >= notes[i]) {
              cashDiff -= notes[i];
              arrToUpdate[i] += 1;
              break;
            }
          }
        }
        setNoteTracker(arrToUpdate);
      }
    } else {
      alert("Input Fields  Cannot be Null");
    }
    setBillAmt("");
    setmoneyPaid("");
  }
  return (
    <div className="App">
      <h1>Cash Register Manager </h1>
      <h3>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </h3>
      <h4>Bill Amount:</h4>
      <input
        placeholder="Enter bill amount"
        type="number"
        value={billAmt}
        onChange={(event) => setBillAmt(event.target.value)}
      />
      <h4>Cash Given:</h4>
      <input
        placeholder="Enter total amount given by customer"
        type="number"
        value={moneyPaid}
        onChange={(event) => setmoneyPaid(event.target.value)}
      />
      <h4>Return change</h4>
      <button onClick={calculate} className="change-button">
        Generate Change
      </button>
      <table className="money-tracker-table">
        <tr className="money-tracker-table-row">
          <td>No of Notes</td>
          {noteTracker.map((ele) => (
            <td>{ele}</td>
          ))}
        </tr>
        <tr>
          <td>Note</td>
          <td>2000</td>
          <td>500</td>
          <td>200</td>
          <td>100</td>
          <td>20</td>
          <td>10</td>
          <td>5</td>
          <td>2</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
}

import React, { useState } from "react";

function App() {
  const [fruits, setFruit] = useState([
    "apple",
    "kiwi",
    "orange",
    "passion fruit",
  ]);
  const [input, setInput] = useState("");

  function addFruitToTopOne() {
    setFruit([input, ...fruits]);
    setInput("");
  }

  function addFruitToLastOne() {
    setFruit([...fruits, input]);
    setInput("");
  }

  function remove(i: number) {
    fruits.splice(i, 1);

    setFruit([...fruits]);
  }

  function sortByAlphabet() {
    setFruit([...fruits].sort());
  }

  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index}>
          <input type="checkbox" /> {index} : {fruit}
        </div>
      ))}

      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={() => addFruitToTopOne()}>Add fruit to top</button>
      <button onClick={() => addFruitToLastOne()}>Add fruit to last</button>
      <button onClick={() => sortByAlphabet()}>Sort by alphabet</button>
    </div>
  );
}

export default App;

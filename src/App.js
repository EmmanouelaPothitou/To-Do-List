import React, { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem'
import birds from './birds1.png'

function App() {
  const [inputText, setInputText] = useState("");
  const [items, insertNewItem] = useState([]);

  function newInputText(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  function setNewItem() {
    insertNewItem(prevItems => {
      return [...prevItems, inputText]
    });
    setInputText("");
  }

  function deleteItem(id) {
    insertNewItem(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div className="App">
      <img id="img" src={birds} alt="birds" />
      <div className="App-header">
        <h1>To-do List</h1>
      </div>
      <div id="inputText">
        <input id="input" onChange={newInputText} value={inputText} type="text" />
        <button id="addButton" onClick={setNewItem}>Add</button>
      </div>
      <div id="list">
        <ul>
          {items.map((item, index) => (
            <ListItem key={index} id={index} text={item} onChecked={deleteItem} />))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

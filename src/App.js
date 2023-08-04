
 import "./App.css";

import React, { useContext, useState } from 'react';
import { FillInfoContext } from './Components/Context';
import Shop from './Components/Shop'
const App = () => {
  const { fillInfo, setFillInfo } = useContext(FillInfoContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new object with the user input data
    const newInfo = {
      name,
      email,
      suggestions,
    };

    // Add the new object to the fillInfo array using the setFillInfo function
    setFillInfo([...fillInfo, newInfo]);

    // Reset the input fields after submission
    setName('');
    setEmail('');
    setSuggestions('');
  };


  return (
    <div>
      <form className="totalform" onSubmit={handleSubmit}>
        <label>
        Name:
          <input className="labeltext1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input className="labeltext2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Suggestions:
          
        </label><br>
        </br>
        <textarea className="labeltext3" rows={10} cols={50} value={suggestions} onChange={(e) => setSuggestions(e.target.value)} />
        <br />
        <button className="submitbutton" type="submit">Submit</button>
      </form>
      <Shop />
      </div>
  );
};

export default App;

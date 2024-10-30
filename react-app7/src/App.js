import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  // 글자의 수를 저장할 state
  let [inputCount, setInputCount] = useState(0);
  
  return (
    <div>
    <input type='text' onChange={ 
      (event) => {
        console.log(event.target.value.length);
        setInputCount(event.target.value.length);
        }
        } placeholder='텍스트를 입력하세요.'></input>
    <p>글자수: {inputCount}</p>
    </div>
  );
}

export default App;

import React, {setState} from 'react';
import './App.css';
import character from './js_classes/character';
import Character_interface from './Character_interface';


 function App() { 
  
  let temp = new character();
  console.log(temp.data()) 
 
  return (
    <div className="App">
      <Character_interface character = {temp} />
    </div>
  );
}



export default App;

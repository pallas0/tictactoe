import './App.css';
import {useState} from 'react'
import Square from "./Components/Square"

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "", ""])
  const chooseSuare = () => {
    
  }


  return (
    <div className="App">
      <div className="board">
        <div className="row">
        <Square val={board[0]} chooseSquare={() => {alert(0)}}/>
        <Square val={board[1]} chooseSquare={() => {alert(1)}}/>
        <Square val={board[2]} chooseSquare={() => {alert(2)}}/>
        </div>
        <div className="row"></div>
        <div className ="row"></div>
      </div>
    </div>
  );
}

export default App;

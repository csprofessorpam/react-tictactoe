import React from 'react'
import './Board.css'
import Square from '../Square/Square';


function Board() {

    const [squares, setSquares] = React.useState(["","","","","","","","",""])
    const [xIsNext, setXIsNext] = React.useState(true)
    const [status, setStatus] = React.useState("Next player: X")
    //const status = "Next player: X"

    let gameOver = false;
    let moveCount = 0;

    const mark = (pos) =>{
        //check if filled
        if (squares[pos] || gameOver)
        return;

        // if (!gameOver){
        //console.log(pos)
        //moveCount++;
        //console.log("count is " , moveCount)
        const temp = [...squares]
        //const letter = xIsNext?'X':'O'
        temp[pos] = xIsNext?'X':'O'
        setSquares(temp);
        
        //check for winner
        
        setXIsNext(!xIsNext)
        setStatus(`Next player: ${xIsNext?'O':'X'}`)
        }
        // else{
        //     //setStatus("Game over")
        // }
    // }
//make useEffect to call whenever squares changes?

React.useEffect(
    ()=>{
        //console.log("squares changed")
        //console.log(
        //    (squares.filter(item=>item==='')).length)
        const empty = squares.filter(item=>item==='')
        //console.log("winner", winner())
        const player=winner();
        if (player){
            setStatus(player + " is winner!")
            gameOver = true;
        }
        else if (empty.length === 0){
            setStatus("Tie game")
            gameOver = true;
        }
    }, [squares]
)
    const checkWin = (a, b, c)=>{
        //console.log("checking ", squares[a], squares[b], squares[c])
        if (squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]){
            return squares[a]
            }
            else{
                return null;
            }
    }

    const winner = () =>{
        if (checkWin(0,1,2))
        return squares[0]
        else if (checkWin(3, 4, 5))
        return squares[3]
        else if (checkWin(6, 7, 8))
        return squares[6]
        else if (checkWin(0,3,6))
        return squares[0]
        else if (checkWin(1, 4, 7))
        return squares[1]
        else if (checkWin(2, 5, 8))
        return squares[2]
        else if (checkWin(0, 4, 8))
        return squares[0]
        else if (checkWin(2, 4, 6))
        return squares[2]
        else 
        return null;
    }
  return (
    <div>
        <div className="status">
            <h2>{status}</h2>
        </div>
        <div className="board-container">
            {
                squares.map((item, index)=>
                    <Square key={index}
                    pos={index} value={item} mark={mark} />)
            }
        </div>
        {/* <div className="board-row">
            <Square pos={0} value={squares[0]} mark={mark} />
            <Square pos={1} value={squares[1]} mark={mark}/>
            <Square pos={2} value={squares[2]} mark={mark}/>
        </div>
        <div className="board-row">
            <Square pos={3} value={squares[3]} mark={mark}/>
            <Square pos={4} value={squares[4]} mark={mark}/>
            <Square pos={5} value={squares[5]} mark={mark}/>
        </div>
        <div className="board-row">
            <Square pos={6} value={squares[6]} mark={mark}/>
            <Square pos={7} value={squares[7]} mark={mark}/>
            <Square pos={8} value={squares[8]} mark={mark}/>
        </div> */}
        <button>New Game</button>
    </div>
  )
}

export default Board
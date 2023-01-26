import React from 'react'
import './Square.css'

function Square({pos, value, mark}) {
    // const [value, setValue] = React.useState("")

    // const mark = () =>{

    // }
  return (
    <button className="square"
            onClick={()=>mark(pos)}>
        {value}

    </button>
  )
}

export default Square
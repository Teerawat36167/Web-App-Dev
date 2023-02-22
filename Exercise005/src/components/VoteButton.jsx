import React from 'react'

const VoteButton = (props) => {
     return (
          <button onClick={() => props.callBack()}>{props.text}</button>
     )
}

export default VoteButton
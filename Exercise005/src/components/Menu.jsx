import './menu.css'
import React from 'react'
import { useState } from 'react'
import VoteButton from './VoteButton'

const Menu = (props) => {

     const [number, setNumber] = useState(0)
     const [text, setText] = useState('MIN')

     const vote = () => {
          // setNumber(number + 1)
          // if (number > 10) {
          //      setNumber(number - 1)
          //      alert('Connot Vote more')
          // }
          // number === 10 ? setText('MAX') : setText(`${number}`)
     }

     const unVote = () => {
          
     }

     return (
          <div className='container'>
               <img className='image' src={props.url} alt="food" />
               <h2 className='title'>{props.title}</h2>
               <h3 className='menu'>{props.menu}</h3>
               <p className='info'>{props.info}</p>
               <div className='button-container'>
                    <VoteButton text='Click to vote' callBack={vote} />
                    <div className='display-vote'>{text}</div>
                    <VoteButton text='Click to unvote' callBack={unVote} />
               </div>
          </div>
     )
}

export default Menu
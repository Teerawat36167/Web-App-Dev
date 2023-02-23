import '../styles/menu.css'
import React from 'react'
import { useState } from 'react'
import VoteButton from './VoteButton'

const Menu = (props) => {

     const [number, setNumber] = useState(0)

     const vote = () => {
          if (number < 10) {
               setNumber(number + 1)
          } else {
               alert('Cannot Vote more')
          }
     }

     const unVote = () => {
          if (number > 0) {
               setNumber(number - 1)
          } else {
               alert('Cannot Unvote')
          }
     }

     const displayNum = () => {
          if (number === 0) {
               return 'MIN'
          } else if (number === 10) {
               return 'MAX'
          } else {
               return number
          }
     }

     return (
          <div className='container'>
               <img className='image' src={props.url} alt="food" />
               <h2 className='title'>{props.title}</h2>
               <h3 className='menu'>{props.menu}</h3>
               <p className='info'>{props.info}</p>
               <div className='button-container'>
                    <VoteButton text='Click to vote' callBack={vote} />
                    <div className='display-vote'>{displayNum()}</div>
                    <VoteButton text='Click to unvote' callBack={unVote} />
               </div>
          </div>
     )
}

export default Menu
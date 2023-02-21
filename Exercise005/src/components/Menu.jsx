import './menu.css'
import React from 'react'

const Menu = (props) => {

     let countVote = 0

     const vote = () => {
          // vote function
     }

     const unvote = () => {
          // unvote function
     }

     return (
          <div className='container'>
               <h2 className='title'>{props.title}</h2>
               <h3 className='menu'>{props.menu}</h3>
          </div>
     )
}

export default Menu
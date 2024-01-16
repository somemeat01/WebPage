import React from 'react'
import {MenuList} from "../helper/MenüList";
function Menü() {
  return (
    <div className="menu">
      <h1 className="menuTıtle">menü</h1>
      <div className="menuList">
        {MenuList.map((menuItem,key) =>{
          return <div className="menuItem"> 
                 <div> <img src={menuItem.image}/> </div>
                 <h3>{menuItem.name}</h3>
                 <p>{menuItem.price} TL</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Menü

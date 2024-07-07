import React, { useState } from 'react'
import './Navbar.css'
import avatar from '../../img/avatar.jpg'
import { menu } from '../../utils/menu'

function Navbar({active, setActive}) {
    
    return (
        <nav class="Nav_main">
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menu.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                <i className="fa-solid fa-right-from-bracket"></i> Sign Out
                </li>
            </div>
        </nav>
    )
}


export default Navbar
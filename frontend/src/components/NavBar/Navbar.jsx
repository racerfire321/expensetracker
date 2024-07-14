import React, { useState } from 'react'
import './Navbar.css'
import avatar from '../../img/avatar.jpg'
import { menu } from '../../utils/menu'

function Navbar({active, setActive}) {
    const [mobileSidebarActive,setMobileSidebarActive]=useState(false)
    return (
        <>
        <nav className='nav-mobile'
        >
            {!mobileSidebarActive&&
            <button
            className='menu-icon'
            onClick={()=>{
                setMobileSidebarActive(true)
            }}>
                <i class="fa-solid fa-bars"></i>
            </button>
            }
            {mobileSidebarActive && (
                <div className='mobile-sidebar-content'>
                    <button
                    className='cross-button'
                    onClick={()=>{
                        setMobileSidebarActive(false)
                    }}
                    >&times;</button>
              
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>User</h2>
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
                </div>
            )}
        </nav>
        <nav class="Nav_main">
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Hello|User</h2>
                    <p>Save for a rainy day</p>
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
        </>
    )
}


export default Navbar

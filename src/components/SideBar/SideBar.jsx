import React from 'react'
import logo from '../../assets/logo.png'

const SideBar = () => {
    return (
        <aside className='SideBar__wrapper'>
            <img className='SideBar__logo' width='300' src={logo} />
            <h2 className='SideBar__header'>100% checklist map and misc.</h2>
            <div className='SideBar__list'>
            </div>
        </aside>
    )
}

export default SideBar